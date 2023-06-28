#!/usr/bin/env tsx
import fsPromises from "node:fs/promises";

function getPrimName(parts: string[]): string {
  let name = "";
  name += parts[0];
  for (const part of parts.slice(1)) {
    name += part[0].toUpperCase() + part.slice(1);
  }
  return name;
}

for (const globalName of [
  "Proxy",
  "globalThis",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape",
  "eval",
  "JSON",
  "Math",
  "Reflect",
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
]) {
  var ts = `
    const ${globalName} = globalThis.${globalName};
    export = ${globalName};
  `;
  await fsPromises.writeFile(`src/${globalName}.ts`, ts);
}

for (const namespaceName of ["JSON", "Math", "Proxy", "Reflect"]) {
  for (const propName of Object.getOwnPropertyNames(
    globalThis[namespaceName]
  )) {
    const primName = getPrimName([namespaceName, propName]);
    var ts = `
      const ${primName} = ${namespaceName}.${primName};
      export = ${primName};
    `;
    await fsPromises.writeFile(`src/${primName}.ts`, ts);
  }
}

for (const className of [
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
]) {
  for (const staticName of Object.getOwnPropertyNames(globalThis[className])) {
    const primName = getPrimName([className, staticName]);
    var ts = `
      const ${primName} = ${className}.${staticName};
      export = ${primName};
    `;
    await fsPromises.writeFile(`src/${primName}.ts`, ts);
  }

  for (const protoName of Object.getOwnPropertyNames(
    globalThis[className].prototype
  )) {
    const primName = getPrimName([className, "prototype", protoName]);
    var ts = `
      const ${primName} = Function.call.bind(
        ${className}.prototype.${protoName}
      );
      export = ${primName};
    `;
    await fsPromises.writeFile(`src/${primName}.ts`, ts);
  }
}
