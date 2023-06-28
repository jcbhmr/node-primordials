const FunctionPrototypeConstructor = Function.call.bind(
  Function.prototype.constructor
);
export = FunctionPrototypeConstructor;
