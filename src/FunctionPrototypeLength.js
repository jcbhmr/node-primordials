/** @type {(this: Function, ...a: Parameters<typeof Function.prototype.length>) => ReturnType<typeof Function.prototype.length>} */
const FunctionPrototypeLength = Object.call.bind(Function.prototype.length);
module.exports = FunctionPrototypeLength;
