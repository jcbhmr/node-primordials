/** @type {(this: Function, v: typeof Function.prototype.caller) => void} */
const FunctionPrototypeSetCaller = Object.call.bind(
  Object.getOwnPropertyDescriptor(Function.prototype, "caller").set
);
module.exports = FunctionPrototypeSetCaller;
