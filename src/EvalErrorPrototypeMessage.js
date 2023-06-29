/** @type {(this: EvalError, ...a: Parameters<typeof EvalError.prototype.message>) => ReturnType<typeof EvalError.prototype.message>} */
const EvalErrorPrototypeMessage = Object.call.bind(EvalError.prototype.message);
module.exports = EvalErrorPrototypeMessage;
