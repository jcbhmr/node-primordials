const SyntaxErrorPrototypeConstructor = Function.call.bind(
  SyntaxError.prototype.constructor
);
export = SyntaxErrorPrototypeConstructor;
