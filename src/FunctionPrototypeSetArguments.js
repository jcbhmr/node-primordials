/** @type {(that: Function, v: typeof Function.prototype.arguments) => void} */
const FunctionPrototypeSetArguments = Object.call.bind(
  Object.getOwnPropertyDescriptor(Function.prototype, "arguments").set
);
module.exports = FunctionPrototypeSetArguments;
