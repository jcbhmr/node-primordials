/**
 * @param {string} part
 * @param {boolean} [start=false]
 * @returns {string}
 */
function partFor(part, start = false) {
  if (typeof part === "symbol") {
    const name = part.description.match(/^Symbol\.(.*)$/)[1];
    return partFor("symbol", start) + partFor(name);
  } else if (start) {
    return part;
  } else {
    return part[0].toUpperCase() + part.slice(1);
  }
}

/**
 * @param {(string | symbol)[]} keys
 * @returns {string}
 */
function nodePrimitiveNameFor(keys) {
  let name = partFor(keys[0], true);
  for (let i = 1; i < keys.length; i++) {
    name += partFor(keys[i]);
  }
  return name;
}

/**
 * @param {string} primitiveName
 * @returns {string}
 */
function escapeNodePrimitiveName(primitiveName) {
  return primitiveName
    .replaceAll("&", "$amp")
    .replaceAll("+", "$plus")
    .replaceAll("'", "$apos")
    .replaceAll("`", "$grave");
}

/**
 * @param {string} primitiveName
 * @returns {string}
 */
function unescapeNodePrimitiveName(primitiveName) {
  return primitiveName
    .replaceAll("$amp", "&")
    .replaceAll("$plus", "+")
    .replaceAll("$apos", "'")
    .replaceAll("$grave", "`");
}

/**
 * @param {string | symbol} key
 * @returns {string}
 */
function propertyAccessorFor(key) {
  if (typeof key === "symbol") {
    return `[${key.description}]`;
  } else if (/^[a-zA-Z$][\w$]*$/.test(key)) {
    return `.${key}`;
  } else {
    return `[${JSON.stringify(key)}]`;
  }
}

/**
 * @param {string | symbol} key
 * @returns {string}
 */
function expressionFor(key) {
  if (typeof key === "symbol") {
    return key.description;
  } else {
    return JSON.stringify(key);
  }
}

export {
  nodePrimitiveNameFor,
  escapeNodePrimitiveName,
  unescapeNodePrimitiveName,
  propertyAccessorFor,
  expressionFor,
};
