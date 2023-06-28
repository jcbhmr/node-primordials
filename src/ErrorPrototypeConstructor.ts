const ErrorPrototypeConstructor = Function.call.bind(
  Error.prototype.constructor
);
export = ErrorPrototypeConstructor;
