const entry = App.configDir + "/ts/main.ts";
const outdir = "/tmp/ags/js";

try {
  await Utils.execAsync([
    "/home/kaptcha/.bun/bin/bun",
    "build",
    entry,
    "--outdir",
    outdir,
    "--external",
    "resource://*",
    "--external",
    "gi://*",
  ]);
  await import(`file://${outdir}/main.js`);
} catch (error) {
  console.error(error);
}
