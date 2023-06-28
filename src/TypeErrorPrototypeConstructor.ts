const TypeErrorPrototypeConstructor = Function.call.bind(
  TypeError.prototype.constructor
);
export = TypeErrorPrototypeConstructor;
