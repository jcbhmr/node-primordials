/** @type {(this: Function, ...a: Parameters<typeof Function.prototype.apply>) => ReturnType<typeof Function.prototype.apply>} */
const FunctionPrototypeApply = Object.call.bind(Function.prototype.apply);
module.exports = FunctionPrototypeApply;
