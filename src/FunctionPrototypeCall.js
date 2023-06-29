/** @type {(that: Function, ...a: Parameters<typeof Function.prototype.call>) => ReturnType<typeof Function.prototype.call>} */
const FunctionPrototypeCall = Object.call.bind(Function.prototype.call);
module.exports = FunctionPrototypeCall;
