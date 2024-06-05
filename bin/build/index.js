import { Listr } from "listr2";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pascalCase, snakeCase } from "scule";
import { incompatibleNames } from "../../constants.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rootDir = path.join(__dirname, "..", "..");
const iconsDir = path.join(rootDir, "icons");

const iconsVariants = ["filled", "outline", "negative"];
const defaultVariant = iconsVariants[0];

const targets = {
  css: {
    title: "CSS files",
    path: "css",
  },
  react: {
    title: "React library",
    path: "packages/healthicons-react",
    include_metadata: true,
  },
  "react-native": {
    title: "React Native library",
    target: "react",
    native: true,
    path: "packages/healthicons-react-native",
    include_metadata: true,
  },
};

const tasks = new Listr(
  [
    {
      title: "Fetching icons",
      task: async (ctx) => {
        ctx.icons = {};

        const iconsVariantsDirs = Object.fromEntries(
          iconsVariants.map((variant) => [
            variant,
            path.join(iconsDir, variant),
          ])
        );

        for (const [variant, dir] of Object.entries(iconsVariantsDirs)) {
          const iconGroups = await fs.readdir(dir);
          const duplicateIconNames = {};

          for (const group of iconGroups) {
            const groupDir = path.join(dir, group);
            const files = await fs.readdir(groupDir);

            const icons = files
              .filter((file) => file.endsWith(".svg"))
              .map((file) => {
                let name = path.parse(file).name;
                let nameVariant = `${name}-${variant}`;

                if (!duplicateIconNames[name]) {
                  duplicateIconNames[name] = 1;
                } else {
                  duplicateIconNames[name]++;
                }

                // Rename if name is duplicated
                if (duplicateIconNames[name] > 1) {
                  name = `${name}-${group}`;
                  nameVariant = `${name}-${variant}-${group}`;
                }

                if (name in incompatibleNames) {
                  name = incompatibleNames[name];
                  nameVariant = `${name}-${variant}`;
                }

                return {
                  name,
                  nameVariant,
                  pascalName: pascalCase(name),
                  pascalNameVariant: pascalCase(nameVariant),
                  snakeName: snakeCase(name),
                  snakeNameVariant: snakeCase(nameVariant),
                  path: path.join(groupDir, file),
                };
              });

            ctx.icons[variant] = [...(ctx.icons[variant] || []), ...icons];
          }
        }
        ctx.global = { defaultVariant };
      },
    },
    {
      title:
        "Adding component name to meta-data.json file - and include in packages",
      task: async (ctx) => {
        const metaDataPath = path.join(iconsDir, "meta-data.json");
        let metadata = JSON.parse(await fs.readFile(metaDataPath, "utf-8"));

        metadata = metadata.map((item) => {
          const icon = ctx.icons[defaultVariant].find(
            (icon) => path.parse(icon.path).name === item.id
          );

          return {
            ...item,
            component_name: icon.pascalName,
          };
        });

        Object.entries(targets).forEach(async ([targetName, targetConfig]) => {
          if (targetConfig.include_metadata) {
            const targetPath = path.join(
              rootDir,
              ...targetConfig.path.split(path.posix.sep),
              "updated-meta-data.json"
            );

            await fs.writeFile(targetPath, JSON.stringify(metadata, null, 2));
          }
        });
      },
    },
    {
      title: "Building targets",
      task: (_, task) =>
        task.newListr(
          Object.entries(targets).map(([targetName, targetConfig]) => ({
            title: targetConfig.title,
            enabled: () =>
              cliTargets.length === 0 || cliTargets.includes(targetName),
            task: async (ctx) => {
              const { default: task } = await import(
                `./targets/${targetConfig.target || targetName}/index.js`
              );

              targetConfig.path = path.join(
                rootDir,
                ...targetConfig.path.split(path.posix.sep)
              );

              return task(ctx, targetConfig);
            },
          })),
          { concurrent: true, exitOnError: false }
        ),
    },
  ],
  {
    rendererOptions: {
      collapseSubtasks: false,
      collapseErrors: false,
    },
  }
);

const cliTargets = [];

// Get targets from command line arguments
// (build all targets if no arguments given)
for (const arg of process.argv.slice(2)) {
  if (arg in targets) {
    cliTargets.push(arg);
  } else {
    console.error(
      `Target '${arg}' doesn't exist!\n\nPossible targets are:\n${Object.keys(
        targets
      )
        .map((name) => `- ${name}`)
        .join("\n")}`
    );

    process.exit(1);
  }
}

await tasks.run();
