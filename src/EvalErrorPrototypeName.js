/** @type {(this: EvalError, ...a: Parameters<typeof EvalError.prototype.name>) => ReturnType<typeof EvalError.prototype.name>} */
const EvalErrorPrototypeName = Object.call.bind(EvalError.prototype.name);
module.exports = EvalErrorPrototypeName;
