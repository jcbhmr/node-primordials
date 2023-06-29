/** @type {(that: Symbol, ...a: Parameters<typeof Symbol.prototype.constructor>) => ReturnType<typeof Symbol.prototype.constructor>} */
const SymbolPrototypeConstructor = Object.call.bind(
  Symbol.prototype.constructor
);
module.exports = SymbolPrototypeConstructor;
