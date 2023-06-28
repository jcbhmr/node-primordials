#!/usr/bin/env node
import fsPromises from "node:fs/promises";
import { $ } from "execa";
import { pascalCase } from "change-case";

await fsPromises.mkdir(".cache");
await fsPromises.mkdir(".cache/src");

const functions = {
  Proxy,
  decodeURI,
  decodeURIComponent,
  encodeURI,
  encodeURIComponent,
  escape,
  unescape,
};
for (const name of Object.keys(functions)) {
  var ts = `
    const ${name} = globalThis.${name};
    export = ${name};
  `;
  await fsPromises.writeFile(`.cache/src/${name}.ts`, ts);
}

const namespaces = {
  JSON,
  Math,
  Proxy,
  Reflect,
};
for (const [namespaceName, value] of Object.entries(namespaces)) {
  for (const propertyName of Object.getOwnPropertyNames(value)) {
    const fullName = pascalCase(namespaceName + " " + propertyName);
    var ts = `
      const ${fullName} = ${namespaceName}.${propertyName};
      export = ${fullName};
    `;
    await fsPromises.writeFile(`.cache/src/${fullName}.ts`, ts);
  }
}

const classes = {
  AggregateError,
  Array,
  ArrayBuffer,
  BigInt,
  BigInt64Array,
  BigUint64Array,
  Boolean,
  DataView,
  Date,
  Error,
  EvalError,
  FinalizationRegistry,
  Float32Array,
  Float64Array,
  Function,
  Int16Array,
  Int32Array,
  Int8Array,
  Map,
  Number,
  Object,
  RangeError,
  ReferenceError,
  RegExp,
  Set,
  String,
  Symbol,
  SyntaxError,
  TypeError,
  URIError,
  Uint16Array,
  Uint32Array,
  Uint8Array,
  Uint8ClampedArray,
  WeakMap,
  WeakRef,
  WeakSet,
};
for (const [className, value] of Object.entries(classes)) {
  var ts = `
    const ${className} = globalThis.${className};
    export = ${className};
  `;
  await fsPromises.writeFile(`.cache/src/${className}.ts`, ts);

  for (const staticName of Object.getOwnPropertyNames(value)) {
    const d = Object.getOwnPropertyDescriptor(value, staticName);
    if ("value" in d) {
      const fullName = pascalCase(className + " " + staticName);
      var ts = `
      const ${fullName} = ${className}.${staticName};
      export = ${fullName};
    `;
      await fsPromises.writeFile(`.cache/src/${fullName}.ts`, ts);
    } else {
      if (d.get) {
        const fullName = pascalCase(className + " get " + staticName);
        var ts = `
          const ${fullName} = Object.getOwnPropertyDescriptor(${className}, "${staticName}")!.get!;
          export = ${fullName};
        `;
        await fsPromises.writeFile(`.cache/src/${fullName}.ts`, ts);
      }
      if (d.set) {
        const fullName = pascalCase(className + " set " + staticName);
        var ts = `
          const ${fullName} = Object.getOwnPropertyDescriptor(${className}, "${staticName}")!.set!;
          export = ${fullName};
        `;
        await fsPromises.writeFile(`.cache/src/${fullName}.ts`, ts);
      }
    }
  }

  for (const prototypeName of Object.getOwnPropertyNames(value.prototype)) {
    const d = Object.getOwnPropertyDescriptor(value.prototype, prototypeName);
    if ("value" in d) {
      const fullName = pascalCase(className + " prototype " + prototypeName);
      var ts = `
        const ${fullName} = uncurryThis(${className}.prototype.${prototypeName});
        export = ${fullName};
      `;
      await fsPromises.writeFile(`.cache/src/${fullName}.ts`, ts);
    } else {
      if (d.get) {
        const fullName = pascalCase(
          className + " prototype get " + prototypeName
        );
        var ts = `
          const ${fullName} = uncurryThis(
            Object.getOwnPropertyDescriptor(${className}.prototype, "${prototypeName}")!.get!
          );
          export = ${fullName};
        `;
        await fsPromises.writeFile(`.cache/src/${fullName}.ts`, ts);
      }
      if (d.set) {
        const fullName = pascalCase(
          className + " prototype set " + prototypeName
        );
        var ts = `
          const ${fullName} = uncurryThis(
            Object.getOwnPropertyDescriptor(${className}.prototype, "${prototypeName}")!.set!
          );
          export = ${fullName};
        `;
        await fsPromises.writeFile(`.cache/src/${fullName}.ts`, ts);
      }
    }
  }
}

const primordialNames = (await fsPromises.readFile("primordials.txt", "utf8"))
  .trim()
  .split(/\r?\n/g)
  .sort();
var ts = "";
for (const name of primordialNames) {
  ts += `import ${name} = require("./${name}.js");\n`;
}
ts += "\n";
ts += `export = {`;
for (const name of primordialNames) {
  ts += `${name},\n`;
}
ts += `};`;
await fsPromises.writeFile(".cache/src/index.ts", ts);

var ts = `
  import primordials_ = require("./index.js");

  declare global {
    var primordials: typeof primordials_;
  }

  globalThis.primordials = primordials_;
`;
await fsPromises.writeFile(".cache/src/polyfill.ts", ts);

var tsconfig = `{
  "compilerOptions": {
    "outDir": "dist",
    "target": "ESNext",
    "module": "CommonJS",
    "moduleResolution": "NodeNext",
    "isolatedModules": true,
    "lib": ["ESNext", "DOM"],
    "skipLibCheck": true,
    "strict": true
  }
}`;
await fsPromises.writeFile(".cache/tsconfig.json", tsconfig);
await $`cd .cache && npx tsc`;
await fsPromises.rename(".cache/dist", "dist");
