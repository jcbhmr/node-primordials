const RegExpPrototypeConstructor = Function.call.bind(
  RegExp.prototype.constructor
);
export = RegExpPrototypeConstructor;
