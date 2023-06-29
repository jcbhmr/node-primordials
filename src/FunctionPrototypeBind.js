/** @type {(that: Function, ...a: Parameters<typeof Function.prototype.bind>) => ReturnType<typeof Function.prototype.bind>} */
const FunctionPrototypeBind = Object.call.bind(Function.prototype.bind);
module.exports = FunctionPrototypeBind;
