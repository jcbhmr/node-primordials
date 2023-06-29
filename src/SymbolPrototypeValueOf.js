/** @type {(this: Symbol, ...a: Parameters<typeof Symbol.prototype.valueOf>) => ReturnType<typeof Symbol.prototype.valueOf>} */
const SymbolPrototypeValueOf = Object.call.bind(Symbol.prototype.valueOf);
module.exports = SymbolPrototypeValueOf;
