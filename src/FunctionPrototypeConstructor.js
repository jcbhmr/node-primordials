/** @type {(that: Function, ...a: Parameters<typeof Function.prototype.constructor>) => ReturnType<typeof Function.prototype.constructor>} */
const FunctionPrototypeConstructor = Object.call.bind(
  Function.prototype.constructor
);
module.exports = FunctionPrototypeConstructor;
