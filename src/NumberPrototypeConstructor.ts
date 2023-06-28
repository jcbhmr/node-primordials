const NumberPrototypeConstructor = Function.call.bind(
  Number.prototype.constructor
);
export = NumberPrototypeConstructor;
