#!/usr/bin/env node
import fsPromises from "node:fs/promises";

/**
 * @param {string[]} parts
 * @returns {string}
 */
function getPrimName(parts) {
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
  var js = `
    const ${globalName} = globalThis.${globalName};
    module.exports = ${globalName};
  `;
  await fsPromises.writeFile(`src/${globalName}.js`, js);
}

for (const nspName of ["JSON", "Math", "Proxy", "Reflect"]) {
  for (const propName of Object.getOwnPropertyNames(globalThis[nspName])) {
    const primName = getPrimName([nspName, propName]);
    var js = `
      const ${primName} = ${nspName}.${primName};
      module.exports = ${primName};
    `;
    await fsPromises.writeFile(`src/${primName}.js`, js);
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
  "Promise",
]) {
  for (const staticName of Object.getOwnPropertyNames(globalThis[className])) {
    const d = Object.getOwnPropertyDescriptor(
      globalThis[className],
      staticName
    );
    if ("value" in d) {
      const primName = getPrimName([className, staticName]);
      var js = `
        const ${primName} = ${className}.${staticName};
        module.exports = ${primName};
      `;
      await fsPromises.writeFile(`src/${primName}.js`, js);
    } else {
      {
        const primName = getPrimName([className, "get", staticName]);
        var js = `
          /** @type {() => typeof ${className}.${staticName}} */
          const ${primName} = Object.getOwnPropertyDescriptor(${className}, "${staticName}").get;
          module.exports = ${primName};
        `;
        await fsPromises.writeFile(`src/${primName}.js`, js);
      }

      if (d.set) {
        const primName = getPrimName([className, "set", staticName]);
        var js = `
          /** @type {(v: typeof ${className}.${staticName}) => void} */
          const ${primName} = Object.getOwnPropertyDescriptor(${className}, "${staticName}").set;
          module.exports = ${primName};
        `;
        await fsPromises.writeFile(`src/${primName}.js`, js);
      }
    }
  }

  for (const protoName of Object.getOwnPropertyNames(
    globalThis[className].prototype
  )) {
    const d = Object.getOwnPropertyDescriptor(
      globalThis[className].prototype,
      protoName
    );
    if ("value" in d) {
      const primName = getPrimName([className, "prototype", protoName]);
      var js = `
        /** @type {(this: ${className}, ...a: Parameters<typeof ${className}.prototype.${protoName}>) => ReturnType<typeof ${className}.prototype.${protoName}>} */
        const ${primName} = Object.call.bind(${className}.prototype.${protoName});
        module.exports = ${primName};
      `;
      await fsPromises.writeFile(`src/${primName}.js`, js);
    } else {
      {
        const primName = getPrimName([
          className,
          "prototype",
          "get",
          protoName,
        ]);
        var js = `
          /** @type {(this: ${className}) => typeof ${className}.prototype.${protoName}} */
          const ${primName} = Object.call.bind(Object.getOwnPropertyDescriptor(${className}.prototype, "${protoName}").get);
          module.exports = ${primName};
        `;
        await fsPromises.writeFile(`src/${primName}.js`, js);
      }

      if (d.set) {
        const primName = getPrimName([
          className,
          "prototype",
          "set",
          protoName,
        ]);
        var js = `
          /** @type {(this: ${className}, v: typeof ${className}.prototype.${protoName}) => void} */
          const ${primName} = Object.call.bind(Object.getOwnPropertyDescriptor(${className}.prototype, "${protoName}").set);
          module.exports = ${primName};
        `;
        await fsPromises.writeFile(`src/${primName}.js`, js);
      }
    }
  }
}
