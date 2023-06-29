const ArrayIterator = require("./ArrayIterator.js");

/** @type {"Array Iterator"} */
// @ts-ignore
const ArrayIteratorPrototypeSymbolToStringTag =
  ArrayIterator.prototype[Symbol.toStringTag];
module.exports = ArrayIteratorPrototypeSymbolToStringTag;
