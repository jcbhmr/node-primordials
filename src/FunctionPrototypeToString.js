/** @type {(this: Function, ...a: Parameters<typeof Function.prototype.toString>) => ReturnType<typeof Function.prototype.toString>} */
const FunctionPrototypeToString = Object.call.bind(Function.prototype.toString);
module.exports = FunctionPrototypeToString;
