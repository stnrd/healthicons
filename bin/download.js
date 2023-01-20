import { openSync, promises as fs, writeFileSync } from "fs";
import path, { dirname } from "path";
import JSZip from "jszip";
import os from "os";
import { fileURLToPath } from "url";
import { Listr } from "listr2";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dirPrefix = "healthicons-main/public/icons/svg";
const healthIconsZipURL =
  "https://github.com/resolvetosavelives/healthicons/archive/refs/heads/main.zip";

const tasks = new Listr(
  [
    {
      title: "Create tmp directory ",
      task: async (ctx) => {
        try {
          ctx.tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "download-"));
        } catch (err) {
          ctx.skip = true;
          throw new Error(err.message);
        }
      },
    },
    {
      title: "Download zip file",
      task: async (ctx) => {
        try {
          const res = await fetch(healthIconsZipURL);
          const file = await res.blob();

          writeFileSync(
            `${ctx.tmpDir}/main.zip`,
            Buffer.from(await file.arrayBuffer())
          );
        } catch (error) {
          throw new Error(error);
        }
      },
    },
    {
      title: "Extracting zip file",
      task: async (ctx) => {
        try {
          // Read zip file
          const zipFile = await fs.readFile(`${ctx.tmpDir}/main.zip`);
          const zip = await JSZip.loadAsync(zipFile);

          // Get the entries of the dirPrefix you want to extract
          zip.forEach(async (path, zipEntry) => {
            // Ingore the files that don't start with the prefix
            if (!path.startsWith(dirPrefix)) return;
            try {
              const zipBuffer = await zipEntry.async("nodebuffer");
              await fs.writeFile(path, zipBuffer);
            } catch (error) {}
          });
        } catch (error) {
          throw new Error(error);
        }
      },
    },
  ],
  {
    concurrent: false,
    rendererOptions: {
      collapse: false,
      collapseErrors: false,
      showSubtasks: true,
      showErrorMessage: true,
    },
  }
);

await tasks.run();
