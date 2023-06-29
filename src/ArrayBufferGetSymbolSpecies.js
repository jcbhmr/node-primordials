/** @type {(that: ArrayBuffer) => { new (...a: any[]): ArrayBuffer }} */
const ArrayBufferGetSymbolSpecies = Object.call.bind(
  Object.getOwnPropertyDescriptor(ArrayBuffer, Symbol.species).get
);
module.exports = ArrayBufferGetSymbolSpecies;
