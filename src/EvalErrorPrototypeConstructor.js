/** @type {(this: EvalError, ...a: Parameters<typeof EvalError.prototype.constructor>) => ReturnType<typeof EvalError.prototype.constructor>} */
const EvalErrorPrototypeConstructor = Object.call.bind(
  EvalError.prototype.constructor
);
module.exports = EvalErrorPrototypeConstructor;
