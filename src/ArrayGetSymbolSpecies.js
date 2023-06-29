/** @type {(that: Array) => { new (...a: any[]): Array }} */
const ArrayGetSymbolSpecies = Object.call.bind(
  Object.getOwnPropertyDescriptor(Array, Symbol.species).get
);
module.exports = ArrayGetSymbolSpecies;
