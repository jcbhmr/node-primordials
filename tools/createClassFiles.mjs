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

  for (const key of Reflect.ownKeys(globalThis[className])) {
    // prettier-ignore
    const desc = Object.getOwnPropertyDescriptor(globalThis[className], key);
    if ("value" in desc) {
      const name = nodePrimitiveNameFor([className, key]);
      const escapedName = escapeNodePrimitiveName(name);
      // prettier-ignore
      const js = `
        "use strict";
        const Class = require("./${className}.js");
        const ${escapedName} = Class${propertyAccessorFor(key)};
        module.exports = ${escapedName};
      `;
      files.push(new File([js], escapedName + ".js"));
    } else {
      const name = nodePrimitiveNameFor([className, "get", key]);
      const escapedName = escapeNodePrimitiveName(name);
      // prettier-ignore
      const js = `
        "use strict";
        const Class = require("./${className}.js");
        const { get: ${escapedName} } = Object.getOwnPropertyDescriptor(Class, ${expressionFor(key)}) ?? {};
        /** @type {() => typeof ${className}[${expressionFor(key)}]} */
        module.exports = ${escapedName};
      `;
      files.push(new File([js], escapedName + ".js"));

      if (desc.set) {
        const name = nodePrimitiveNameFor([className, "set", key]);
        const escapedName = escapeNodePrimitiveName(name);
        // prettier-ignore
        const js = `
          "use strict";
          const Class = require("./${className}.js");
          const { set: ${escapedName} } = Object.getOwnPropertyDescriptor(Class, ${expressionFor(key)}) ?? {};
          /** @type {(x: typeof ${className}[${expressionFor(key)}]) => void} */
          module.exports = ${escapedName};
        `;
        files.push(new File([js], escapedName + ".js"));
      }
    }
  }

  for (const key of Reflect.ownKeys(globalThis[className].prototype)) {
    // prettier-ignore
    const desc = Object.getOwnPropertyDescriptor(globalThis[className].prototype, key);
    if ("value" in desc) {
      if (typeof desc.value === "function") {
        const name = nodePrimitiveNameFor([className, "prototype", key]);
        const escapedName = escapeNodePrimitiveName(name);
        // prettier-ignore
        const js = `
          "use strict";
          const uncurryThis = require("./uncurryThis.js");
          const ClassPrototype = require("./${className}Prototype.js");
          const method = ClassPrototype${propertyAccessorFor(key)};
          /** @type {(t: ${className}, ...a: Parameters<${className}[${expressionFor(key)}]>) => ReturnType<${className}[${expressionFor(key)}]>} */
          const ${escapedName} = uncurryThis(method);
          module.exports = ${escapedName};
        `;
        files.push(new File([js], escapedName + ".js"));
      } else {
        const name = nodePrimitiveNameFor([className, "prototype", key]);
        const escapedName = escapeNodePrimitiveName(name);
        // prettier-ignore
        const js = `
          "use strict";
          const ClassPrototype = require("./${className}Prototype.js");
          /** @type {${className}[${expressionFor(key)}]} */
          const ${escapedName} = ClassPrototype${propertyAccessorFor(key)};
          module.exports = ${escapedName};
        `;
        files.push(new File([js], escapedName + ".js"));
      }
    } else {
      const name = nodePrimitiveNameFor([className, "prototype", "get", key]);
      const escapedName = escapeNodePrimitiveName(name);
      // prettier-ignore
      const js = `
        "use strict";
        const uncurryThis = require("./uncurryThis.js");
        const ClassPrototype = require("./${className}Prototype.js");
        const { get } = Object.getOwnPropertyDescriptor(ClassPrototype, ${expressionFor(key)}) ?? {};
        /** @type {() => ${className}[${expressionFor(key)}]} */
        const ${escapedName} = uncurryThis(get);
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
          const ClassPrototype = require("./${className}Prototype.js");
          const { set } = Object.getOwnPropertyDescriptor(ClassPrototype, ${expressionFor(key)}) ?? {};
          /** @type {(x: ${className}[${expressionFor(key)}]) => void} */
          const ${escapedName} = uncurryThis(set);
          module.exports = ${escapedName};
        `;
        files.push(new File([js], escapedName + ".js"));
      }
    }
  }

  return files;
}
