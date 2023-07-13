import {
  escapeNodePrimitiveName,
  expressionFor,
  nodePrimitiveNameFor,
  propertyAccessorFor,
} from "./util.mjs";

/**
 * @param {string} namespaceName
 * @returns {File[]}
 */
export default function createNamespaceFiles(namespaceName) {
  const files = [];

  for (const key of Reflect.ownKeys(globalThis[namespaceName])) {
    // prettier-ignore
    const desc = Object.getOwnPropertyDescriptor(globalThis[namespaceName], key);
    if ("value" in desc) {
      const name = nodePrimitiveNameFor([namespaceName, key]);
      const escapedName = escapeNodePrimitiveName(name);
      // prettier-ignore
      const js = `
        "use strict";
        const Namespace = globalThis.${namespaceName};
        const ${escapedName} = Namespace${propertyAccessorFor(key)};
        module.exports = ${escapedName};
      `;
      files.push(new File([js], escapedName + ".js"));
    } else {
      const name = nodePrimitiveNameFor([namespaceName, "get", key]);
      const escapedName = escapeNodePrimitiveName(name);
      // prettier-ignore
      const js = `
        "use strict";
        const Namespace = globalThis.${namespaceName};
        const { get: ${escapedName} } = Object.getOwnPropertyDescriptor(Namespace, ${expressionFor(key)});
        /** @type {() => typeof ${namespaceName}[${expressionFor(key)}]} */
        module.exports = ${escapedName};
      `;
      files.push(new File([js], escapedName + ".js"));

      if (desc.set) {
        const name = nodePrimitiveNameFor([namespaceName, "set", key]);
        const escapedName = escapeNodePrimitiveName(name);
        // prettier-ignore
        const js = `
          "use strict";
          const Namespace = globalThis.${namespaceName};
          const { set: ${escapedName} } = Object.getOwnPropertyDescriptor(Namespace, ${expressionFor(key)});
          /** @type {(x: typeof ${namespaceName}[${expressionFor(key)}]) => void} */
          module.exports = ${escapedName};
        `;
        files.push(new File([js], escapedName + ".js"));
      }
    }
  }

  return files;
}
