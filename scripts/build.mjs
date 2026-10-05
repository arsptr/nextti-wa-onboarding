import { cp, mkdir, rm } from "node:fs/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

await rm("dist", { recursive: true, force: true });
await execFileAsync("npx", ["tsc"]);
await mkdir("dist", { recursive: true });
await cp("index.html", "dist/index.html");
await cp("styles.css", "dist/styles.css");
await cp("public/next-ti-logo.png", "dist/next-ti-logo.png");
