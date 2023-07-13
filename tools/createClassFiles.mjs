import createNamespaceFiles from "./createNamespaceFiles.mjs";
import {
  escapeNodePrimitiveName,
  expressionFor,
  nodePrimitiveNameFor,
  propertyAccessorFor,
} from "./util.mjs";

/**
 * @param {string} classNameOrClass
 * @returns {File[]}
 */
export default function createClassFiles(className) {
  const files = [];

  // prettier-ignore
  const js = `
    "use strict";
    const ${className} = globalThis.${className};
    module.exports = ${className};
  `;
  files.push(new File([js], className + ".js"));

  const staticFiles = createNamespaceFiles(className);
  files.push(...staticFiles);

  for (const key of Reflect.ownKeys(globalThis[className].prototype)) {
    // prettier-ignore
    const desc = Object.getOwnPropertyDescriptor(globalThis[className].prototype, key);
    if ("value" in desc) {
      const name = nodePrimitiveNameFor([className, "prototype", key]);
      const escapedName = escapeNodePrimitiveName(name);
      // prettier-ignore
      const js = `
        "use strict";
        const ClassPrototype = require("./${className}Prototype.js") ?? {};
        const ${escapedName} = ClassPrototype${propertyAccessorFor(key)};
        /** @type {${className}[${expressionFor(key)}]} */
        module.exports = ${escapedName};
      `;
      files.push(new File([js], escapedName + ".js"));
    } else {
      const name = nodePrimitiveNameFor([className, "prototype", "get", key]);
      const escapedName = escapeNodePrimitiveName(name);
      // prettier-ignore
      const js = `
        "use strict";
        const uncurryThis = require("./uncurryThis.js");
        const ClassPrototype = require("./${className}Prototype.js") ?? {};
        const { get: ${escapedName} } = Object.getOwnPropertyDescriptor(ClassPrototype, ${expressionFor(key)}) ?? {};
        /** @type {() => ${className}[${expressionFor(key)}]} */
        module.exports = ${escapedName};
      `;
      files.push(new File([js], escapedName + ".js"));

      if (desc.set) {
        const name = nodePrimitiveNameFor([className, "prototype", "set", key]);
        const escapedName = escapeNodePrimitiveName(name);
        // prettier-ignore
        const js = `
          "use strict";
          const uncurryThis = require("./uncurryThis.js");
          const ClassPrototype = require("./${className}Prototype.js") ?? {};
          const { set: ${escapedName} } = Object.getOwnPropertyDescriptor(ClassPrototype, ${expressionFor(key)}) ?? {};
          /** @type {(x: ${className}[${expressionFor(key)}]) => void} */
          module.exports = ${escapedName};
        `;
        files.push(new File([js], escapedName + ".js"));
      }
    }
  }

  return files;
}
