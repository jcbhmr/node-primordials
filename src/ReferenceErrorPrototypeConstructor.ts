const ReferenceErrorPrototypeConstructor = Function.call.bind(
  ReferenceError.prototype.constructor
);
export = ReferenceErrorPrototypeConstructor;
