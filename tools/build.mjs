#!/usr/bin/env node
import { mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { $ } from "execa";
import createNamespaceFiles from "./createNamespaceFiles.mjs";
import createClassFiles from "./createClassFiles.mjs";
import getAllPrimordialNames from "./getAllPrimordialNames.mjs";
import { escapeNodePrimitiveName, propertyAccessorFor } from "./util.mjs";

await rm("dist", { recursive: true, force: true });
await mkdir("dist", { recursive: true });
await mkdir("dist/lib", { recursive: true });

const simpleGlobalNames = [
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape",
  "Proxy",
  // Special cases. Handled in 'src/*.js'.
  "globalThis",
  "eval",
];
for (const n of simpleGlobalNames) {
  const js = `
    "use strict";
    const ${n} = globalThis.${n};
    module.exports = ${n};
  `;
  await writeFile(`dist/${n}.js`, js);
}

const namespaceNames = ["JSON", "Math", "Proxy", "Reflect"];
for (const n of namespaceNames) {
  const files = createNamespaceFiles(n);
  for (const f of files) {
    await writeFile(`dist/${f.name}`, await f.text());
  }
}

const classNames = [
  "AggregateError",
  "Array",
  "ArrayBuffer",
  "BigInt",
  "BigInt64Array",
  "BigUint64Array",
  "Boolean",
  "DataView",
  "Date",
  "Error",
  "EvalError",
  "FinalizationRegistry",
  "Float32Array",
  "Float64Array",
  "Function",
  "Int16Array",
  "Int32Array",
  "Int8Array",
  "Map",
  "Number",
  "Object",
  "RangeError",
  "ReferenceError",
  "RegExp",
  "Set",
  "String",
  "Symbol",
  "SyntaxError",
  "TypeError",
  "URIError",
  "Uint16Array",
  "Uint32Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "WeakMap",
  "WeakRef",
  "WeakSet",
  // 'Promise' needs a 'this' value in static methods. Any generated files here
  // will be overwritten by the 'Promise*.js' files from the 'src/' folder when
  // they get copied later.
  "Promise",
];
for (const n of classNames) {
  const files = createClassFiles(n);
  for (const f of files) {
    await writeFile(`dist/${f.name}`, await f.text());
  }
}

TypedArray: {
  const TypedArray = Object.getPrototypeOf(Uint8Array);
  globalThis.TypedArray = TypedArray;
  const files = createClassFiles("TypedArray");
  for (const f of files) {
    await writeFile(`dist/${f.name}`, await f.text());
  }
}

// Remove all the files that we expect to be generated. That way, if they AREN'T
// (for whatever reason) the improper generated version doesn't make it a false
// positive. This only covers '.js' files, not any '.d.ts' type enhancements.
const expectedManualFiles = [
  // These are tricky due to their names. 😜
  "eval",
  "globalThis",

  // Normal 'globalThis.TypedArray' doesn't work.
  "TypedArray",

  // 'TypedArray' static methods need a 'this'.
  "TypedArrayFrom",
  "TypedArrayGetSymbolSpecies",
  "TypedArrayOf",

  // 'Promise' static methods need a 'this'.
  "PromiseAll",
  "PromiseAllSettled",
  "PromiseAny",
  "PromiseGetSymbolSpecies",
  "PromiseRace",
  "PromiseReject",
  "PromiseResolve",
];
for (const n of expectedManualFiles) {
  await rm(`dist/${n}.js`, { force: true });
}

// This will OVERWRITE some of the generated files from above. This is intended.
let tscError;
try {
  await $`tsc`;
} catch (e) {
  tscError = e;
}

let js = "";
js += "'use strict';\n";
js += `
  if (typeof primordials !== 'undefined') {
    module.exports = primordials;
  } else {
`;
for (const name of await getAllPrimordialNames()) {
  const escapedName = escapeNodePrimitiveName(name);
  // prettier-ignore
  js += `exports${propertyAccessorFor(name)} = require("./${escapedName}.js");\n`;
}
js += "Object.setPrototypeOf(exports, null);\n";
js += "Object.freeze(exports);\n";
js += "}\n";
await writeFile("dist/index-default.js", js);

js = "";
js += "'use strict';\n";
js += `
  if (typeof primordials !== 'undefined') {
    module.exports = primordials;
  } else {
    let internalLoaded = false;
    try {
      const { primordials } = require("internal/test/binding");
      internalLoaded = true;
      module.exports = primordials;
    } catch {}

    if (!internalLoaded) {
`;
for (const name of await getAllPrimordialNames()) {
  const escapedName = escapeNodePrimitiveName(name);
  // prettier-ignore
  js += `exports${propertyAccessorFor(name)} = require("./${escapedName}.js");\n`;
}
js += "Object.setPrototypeOf(exports, null);\n";
js += "Object.freeze(exports);\n";
js += "}\n";
js += "}\n";
await writeFile("dist/index-node.js", js);

if (tscError) {
  throw tscError;
}
