#!/usr/bin/env node
import fs from "node:fs";
import fsPromises from "node:fs/promises";
import { $ } from "execa";

await import("./build.mjs");

var tsconfigjson = `{
  "compilerOptions": {
    "noEmit": true,
    "allowJs": true,
    "checkJs": true,
    "target": "ESNext",
    "module": "CommonJS",
    "moduleResolution": "NodeNext",
    "lib": ["ESNext", "DOM"],
    // "strict": true,
    "skipLibCheck": true,
    "isolatedModules": true
  },
  "include": ["src"]
}`;
await fsPromises.writeFile("dist/tsconfig.json", tsconfigjson);
process.on("exit", () => fs.unlinkSync("dist/tsconfig.json"));
console.debug("wrote tsconfig.json");

var typedocjson = `{
  "out": "../docs/dist",
  "entryPoints": [
    "index.js"
  ],
  "skipErrorChecking": true
}`;
await fsPromises.writeFile("typedoc.json", typedocjson);
process.on("exit", () => fs.unlinkSync("dist/typedoc.json"));
console.debug("wrote typedoc.json");

console.info("running typedoc...");
await $({ cwd: "out" })`npx typedoc`;
