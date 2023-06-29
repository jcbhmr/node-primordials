/** @type {(that: Symbol, ...a: Parameters<typeof Symbol.prototype.toString>) => ReturnType<typeof Symbol.prototype.toString>} */
const SymbolPrototypeToString = Object.call.bind(Symbol.prototype.toString);
module.exports = SymbolPrototypeToString;
