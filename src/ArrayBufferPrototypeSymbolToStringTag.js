/** @type {"ArrayBuffer"} */
// @ts-ignore
const ArrayBufferPrototypeSymbolToStringTag =
  ArrayBuffer.prototype[Symbol.toStringTag];
module.exports = ArrayBufferPrototypeSymbolToStringTag;
