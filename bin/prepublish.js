import fs from "node:fs";
import path from "node:path";
import semver from "semver";

const PACKAGE_BASE = "";

const newVersion = semver.valid(semver.coerce(process.env.TAG_NAME));
console.info("New version is %s", newVersion);

if (!newVersion) {
  throw new Error(`Tag name ${process.env.TAG_NAME} is not valid.`);
}

publishNpmPackage("healthicons");
publishNpmPackage("healthicons-react");
publishNpmPackage("healthicons-react-native");
publishNpmPackage("healthicons-vue");

function publishNpmPackage(name) {
  console.info("Publishing %s", name);

  const packageJsonPath =
    name === "healthicons"
      ? "package.json"
      : path.join("packages", name, "package.json");
  const contents = JSON.parse(fs.readFileSync(packageJsonPath).toString());
  contents.version = newVersion;

  if (PACKAGE_BASE) {
    contents.name = `${PACKAGE_BASE}/${name}`;
  }

  fs.writeFileSync(packageJsonPath, JSON.stringify(contents, undefined, 2));
  console.info("package.json updated");
}
