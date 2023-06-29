/** @type {(this: Symbol) => typeof Symbol.prototype.description} */
const SymbolPrototypeGetDescription = Object.call.bind(
  Object.getOwnPropertyDescriptor(Symbol.prototype, "description").get
);
module.exports = SymbolPrototypeGetDescription;
