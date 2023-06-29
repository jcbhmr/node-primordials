/** @type {(this: SyntaxError, ...a: Parameters<typeof SyntaxError.prototype.constructor>) => ReturnType<typeof SyntaxError.prototype.constructor>} */
const SyntaxErrorPrototypeConstructor = Object.call.bind(
  SyntaxError.prototype.constructor
);
module.exports = SyntaxErrorPrototypeConstructor;
