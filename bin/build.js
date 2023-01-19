import { execa } from "execa";
import { promises as fs, readFileSync } from "fs";
import { Listr } from "listr2";
import os from "os";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { incompatibleNames } from "../constants.js";

// Paths
const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, "..");
const healthiconsIconsDir = path.join(rootDir, "icons");
const ignoreCleanFilenames = ["HealthIconsContext.tsx"];

// Targets for building icons
const targets = {
  "meta-data": { path: "meta-data.json" },
  css: { path: "css/healthicons.css" },
  "healthicons-react": { react: true, path: "packages/healthicons-react" },
  "healthicons-react-native": {
    react: true,
    path: "packages/healthicons-react-native",
  },
};

// Get targets from command line arguments
// (build all targets if no arguments)
const args = process.argv.slice(2);
const cliTargets = [];
args.forEach((target) => {
  if (target in targets) {
    cliTargets.push(target);
  } else {
    console.error(`Target '${target}' doesn't exist!\n\nPossible targets are:`);
    for (const [targetName] of Object.entries(targets)) {
      console.log(`- ${targetName}`);
    }
    process.exit(1);
  }
});

// Build tasks
const tasks = new Listr(
  [
    {
      title: "Fetching icons",
      task: async (ctx) => {
        ctx.healthIconsFiles = await fs.readdir(healthiconsIconsDir);
      },
    },
    {
      title: "Building targets",
      skip: (ctx) => !ctx.healthIconsFiles,
      task: (_, task) =>
        task.newListr(
          [
            {
              title: "Building meta-data file",
              enabled: () =>
                cliTargets.length === 0 || cliTargets.includes("meta-data"),
              task: async (ctx) => {
                await fs.writeFile(
                  path.join(rootDir, targets["meta-data"].path),
                  JSON.stringify({ icons: ctx.healthIconsFiles })
                );
              },
            },
            {
              title: "Building CSS file",
              enabled: () =>
                cliTargets.length === 0 || cliTargets.includes("css"),
              task: async (ctx) => {
                const content = [
                  (
                    await fs.readFile(
                      path.join(__dirname, "header.css"),
                      "utf8"
                    )
                  ).replace("[YEAR]", new Date().getFullYear()),
                ];
                ctx.healthIconsFiles.forEach((file) => {
                  const fileContents = readFileSync(
                    path.join(__dirname, "../icons/", file)
                  )
                    .toString()
                    .replace(/\n/g, "")
                    .replace(/(width|height)="[0-9]+"/g, "")
                    .replace(/[ ]+/g, " ");
                  content.push(
                    `.healthicons-${
                      path.parse(file).name
                    }::before{mask-image:url('data:image/svg+xml;charset=utf-8,${fileContents}');-webkit-mask-image:url('data:image/svg+xml;charset=utf-8,${fileContents}');}`
                  );
                });
                await fs.writeFile(
                  path.join(rootDir, targets.css.path),
                  content
                );
              },
            },
            {
              title: "Building React libraries",
              enabled: () =>
                cliTargets.length === 0 ||
                cliTargets.filter((cliTarget) => targets[cliTarget]?.react)
                  .length > 0,
              task: (_, task) =>
                task.newListr(
                  [
                    {
                      title: "Creating temporary directory",
                      task: async (ctx) => {
                        try {
                          ctx.tmpDir = await fs.mkdtemp(
                            path.join(os.tmpdir(), "healthicons-")
                          );
                        } catch (err) {
                          ctx.skip = true;
                          throw new Error(err.message);
                        }
                      },
                    },
                    {
                      title:
                        "Copying icon files to temporary directory, while renaming icons with incompatible names",
                      skip: (ctx) => ctx.skip,
                      task: async (ctx) => {
                        try {
                          const promises = ctx.healthIconsFiles.map((file) => {
                            const srcFilePath = path.join(
                              healthiconsIconsDir,
                              file
                            );
                            const iconName = file.split(".")[0];
                            const dstFileName =
                              iconName in incompatibleNames
                                ? incompatibleNames[iconName]
                                : iconName;
                            const dstFilePath = path.join(
                              ctx.tmpDir,
                              `${dstFileName}.svg`
                            );

                            return fs.copyFile(srcFilePath, dstFilePath);
                          });
                          return Promise.all(promises).catch((err) => {
                            ctx.skip = true;
                            throw new Error(err.message);
                          });
                        } catch (err) {
                          ctx.skip = true;
                          throw new Error(err.message);
                        }
                      },
                    },
                    {
                      skip: (ctx) => ctx.skip,
                      task: (_, task) => {
                        const targetsToBuild =
                          cliTargets.length > 0
                            ? cliTargets.filter(
                                (cliTarget) => targets[cliTarget]?.react
                              )
                            : Object.keys(targets).filter(
                                (target) => targets[target].react
                              );
                        const tasks = targetsToBuild.map((target) => {
                          const builtIconsDir = path.join(
                            rootDir,
                            targets[target].path,
                            "src"
                          );
                          return {
                            title: `Building ${target}`,
                            task: (_, task) =>
                              task.newListr(
                                [
                                  {
                                    title: "Cleaning target directory",
                                    task: async (ctx) => {
                                      try {
                                        const files = await fs.readdir(
                                          builtIconsDir
                                        );
                                        const promises = files
                                          .filter(
                                            (file) =>
                                              !ignoreCleanFilenames.includes(
                                                path.basename(file)
                                              )
                                          )
                                          .map((file) => {
                                            return fs.unlink(
                                              path.join(builtIconsDir, file)
                                            );
                                          });
                                        return Promise.all(promises).catch(
                                          (err) => {
                                            ctx[target] = { skip: true };
                                            throw new Error(err.message);
                                          }
                                        );
                                      } catch (err) {
                                        ctx[target] = { skip: true };
                                        throw new Error(err.message);
                                      }
                                    },
                                  },
                                  {
                                    title: "Building icon files",
                                    skip: (ctx) => ctx[target]?.skip,
                                    task: async (ctx) => {
                                      try {
                                        await execa(
                                          "svgr",
                                          [
                                            "--config-file",
                                            path.join(
                                              targets[target].path,
                                              ".svgrrc.json"
                                            ),
                                            "--out-dir",
                                            builtIconsDir,
                                            "--template",
                                            "bin/templates/icon-template.cjs",
                                            "--index-template",
                                            "bin/templates/index-template.cjs",
                                            ctx.tmpDir,
                                          ],
                                          { preferLocal: true }
                                        );
                                      } catch (err) {
                                        throw new Error(err.message);
                                      }
                                    },
                                  },
                                ],
                                { concurrent: false, exitOnError: false }
                              ),
                          };
                        });
                        return task.newListr(tasks, {
                          concurrent: true,
                          rendererOptions: { collapse: false },
                        });
                      },
                    },
                  ],
                  { concurrent: false }
                ),
            },
          ],
          { concurrent: true }
        ),
    },
    {
      title: "Removing temporary directory",
      skip: (ctx) => !ctx.tmpDir,
      task: async (ctx) => {
        await fs.rm(ctx.tmpDir, { recursive: true });
      },
    },
  ],
  {
    concurrent: false,
    exitOnError: false,
    rendererOptions: { collapse: false, collapseErrors: false },
  }
);

await tasks.run();
