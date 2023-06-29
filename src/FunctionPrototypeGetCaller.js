/** @type {(this: Function) => typeof Function.prototype.caller} */
const FunctionPrototypeGetCaller = Object.call.bind(
  Object.getOwnPropertyDescriptor(Function.prototype, "caller").get
);
module.exports = FunctionPrototypeGetCaller;
