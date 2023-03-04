import { execa } from "execa";
import { promises as fs, readFileSync } from "fs";
import { Listr } from "listr2";
import { generateTemplateFilesBatch } from "generate-template-files";
import os from "os";
import path, { dirname } from "path";
import { optimize } from "svgo";
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
  "healthicons-react": {
    react: true,
    path: "packages/healthicons-react",
    iconTypes: ["filled", "outline", "negative"],
  },
  "healthicons-react-native": {
    react: true,
    path: "packages/healthicons-react-native",
    iconTypes: ["filled", "outline", "negative"],
  },
  "healthicons-flutter": {
    flutter: true,
    path: "packages/healthicons-flutter",
  },
};

const deepReadDir = async (dirPath) =>
  await Promise.all(
    (
      await fs.readdir(dirPath)
    ).map(async (dirent) => {
      const lstat = await fs.lstat(path.join(dirPath, dirent));
      const p = path.join(dirPath, dirent);
      return lstat.isDirectory() ? await deepReadDir(p) : p;
    })
  );

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
        deepReadDir(healthiconsIconsDir);
        ctx.healthIconsFiles = (await deepReadDir(healthiconsIconsDir))
          .flat(Number.POSITIVE_INFINITY)
          .filter((val) => val.includes(".svg"));
      },
    },
    {
      title: "Building targets",
      skip: (ctx) => !ctx.healthIconsFiles,
      task: (_, task) =>
        task.newListr([
          {
            title: "Building meta-data file",
            enabled: () =>
              cliTargets.length === 0 || cliTargets.includes("meta-data"),
            task: async (ctx) => {
              await fs.writeFile(
                path.join(rootDir, targets["meta-data"].path),
                JSON.stringify({
                  icons: ctx.healthIconsFiles.map(
                    (file) => file.split("healthicons/icons/")[1] // Make it an relative path
                  ),
                })
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
                  await fs.readFile(path.join(__dirname, "header.css"), "utf8")
                ).replace("[YEAR]", new Date().getFullYear()),
              ];
              ctx.healthIconsFiles.forEach((file) => {
                const fileContents = readFileSync(file).toString();
                const optimizedContent = optimize(fileContents);

                const iconType = file
                  .split("healthicons/icons/")[1]
                  .split("/")[0];
                const iconName = path.parse(file).name.replaceAll("_", "-");
                const dstFileName = `${iconType}-${
                  iconName in incompatibleNames
                    ? incompatibleNames[iconName]
                    : iconName
                }`;

                content.push(
                  `.healthicons-${dstFileName}::before{mask-image:url('data:image/svg+xml;charset=utf-8,${optimizedContent.data}');-webkit-mask-image:url('data:image/svg+xml;charset=utf-8,${optimizedContent.data}');}`
                );
              });
              await fs.writeFile(path.join(rootDir, targets.css.path), content);
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
                        // Create icon type directories
                        ["filled", "outline", "negative"].forEach(
                          async (iconType) => {
                            await fs.mkdir(path.join(ctx.tmpDir, iconType));
                          }
                        );

                        const promises = ctx.healthIconsFiles.map((file) => {
                          const srcFilePath = path.join(file);
                          const iconPath = path.parse(file);
                          const iconType = file
                            .split("healthicons/icons/")[1]
                            .split("/")[0]; // get filled or outline or negative
                          const iconName = iconPath.name;
                          const dstFileName =
                            iconName in incompatibleNames
                              ? incompatibleNames[iconName]
                              : iconName;
                          const dstFilePath = path.join(
                            ctx.tmpDir,
                            iconType,
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
                                      const files = (
                                        await deepReadDir(builtIconsDir)
                                      ).flat(Number.POSITIVE_INFINITY);
                                      const promises = files
                                        .filter(
                                          (file) =>
                                            !ignoreCleanFilenames.includes(
                                              path.basename(file)
                                            )
                                        )
                                        .map((file) => {
                                          return fs.unlink(path.join(file));
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
          {
            title: "Building Flutter libraries",
            enabled: () =>
              cliTargets.length === 0 ||
              cliTargets.filter((cliTarget) => targets[cliTarget]?.flutter)
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
                        // Create icon type directories
                        ["filled", "outline", "negative"].forEach(
                          async (iconType) => {
                            await fs.mkdir(path.join(ctx.tmpDir, iconType));
                          }
                        );

                        const promises = ctx.healthIconsFiles.map((file) => {
                          const srcFilePath = path.join(file);
                          const iconPath = path.parse(file);
                          const iconType = file
                            .split("healthicons/icons/")[1]
                            .split("/")[0]; // get filled or outline or negative
                          const iconName = iconPath.name;
                          const dstFileName =
                            iconName in incompatibleNames
                              ? incompatibleNames[iconName]
                              : iconName;
                          const dstFilePath = path.join(
                            ctx.tmpDir,
                            iconType,
                            `${dstFileName}.svg`
                          );

                          ctx.dstFilePaths = [
                            ...(ctx.dstFilePaths ?? []),
                            dstFilePath,
                          ];

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
                              (cliTarget) => targets[cliTarget]?.flutter
                            )
                          : Object.keys(targets).filter(
                              (target) => targets[target].flutter
                            );
                      const tasks = targetsToBuild.map((target) => {
                        const builtIconsDir = path.join(
                          rootDir,
                          targets[target].path,
                          "lib"
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
                                      const files = (
                                        await deepReadDir(builtIconsDir)
                                      ).flat(Number.POSITIVE_INFINITY);
                                      const promises = files
                                        .filter(
                                          (file) =>
                                            !ignoreCleanFilenames.includes(
                                              path.basename(file)
                                            )
                                        )
                                        .map((file) => {
                                          return fs.unlink(path.join(file));
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
                                  title: "Create entry file",
                                  task: async () => {
                                    await fs.writeFile(
                                      path.join(
                                        builtIconsDir,
                                        "healthicons_flutter.dart"
                                      ),
                                      "library healthicons_flutter;\n\n"
                                    );
                                  },
                                },
                                {
                                  title: "Building icon files",
                                  skip: (ctx) => ctx[target]?.skip,
                                  task: async (ctx) => {
                                    const finalFileNames = [];
                                    try {
                                      await Promise.all(
                                        ctx.dstFilePaths.map(async (file) => {
                                          const svgfilename =
                                            path.parse(file).name;

                                          // Prefix with Svg if icon name starts with a number
                                          const iconname = `${
                                            /^\d/.test(svgfilename) ? "Svg" : ""
                                          }${svgfilename}`;

                                          // Extract the icon type from the parent directory
                                          const iconType = path.basename(
                                            path.dirname(file)
                                          );

                                          const svgfilecontent = (
                                            await fs.readFile(file)
                                          ).toString();

                                          await generateTemplateFilesBatch([
                                            {
                                              option:
                                                "Create Icon Flutter Widget",
                                              entry: {
                                                folderPath:
                                                  "./bin/templates/__svgfilename__.dart",
                                              },
                                              dynamicReplacers: [
                                                {
                                                  slot: "__icon__",
                                                  slotValue: iconname,
                                                },
                                                {
                                                  slot: "__svgfilecontent__",
                                                  slotValue: svgfilecontent,
                                                },
                                                {
                                                  slot: "__svgfilename__",
                                                  slotValue: svgfilename,
                                                },
                                              ],
                                              output: {
                                                path: `./packages/healthicons-flutter/lib/${iconType}/__svgfilename__(snakeCase).dart`,
                                                pathAndFileNameDefaultCase:
                                                  "(snakeCase)",
                                              },
                                              async onComplete(results) {
                                                finalFileNames.push(
                                                  results.output.path
                                                );
                                              },
                                            },
                                          ]);
                                        })
                                      );

                                      finalFileNames.sort();
                                      await fs.appendFile(
                                        path.join(
                                          builtIconsDir,
                                          "healthicons_flutter.dart"
                                        ),
                                        finalFileNames
                                          .map(
                                            (fileName) =>
                                              `export './${path.basename(
                                                fileName
                                              )}';`
                                          )
                                          .join("\n")
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
        ]),
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
