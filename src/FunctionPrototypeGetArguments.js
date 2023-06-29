/** @type {(that: Function) => typeof Function.prototype.arguments} */
const FunctionPrototypeGetArguments = Object.call.bind(
  Object.getOwnPropertyDescriptor(Function.prototype, "arguments").get
);
module.exports = FunctionPrototypeGetArguments;
