/** @type {(that: Function, ...a: Parameters<typeof Function.prototype.name>) => ReturnType<typeof Function.prototype.name>} */
const FunctionPrototypeName = Object.call.bind(Function.prototype.name);
module.exports = FunctionPrototypeName;
