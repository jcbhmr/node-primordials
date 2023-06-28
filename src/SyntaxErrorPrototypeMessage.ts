const SyntaxErrorPrototypeMessage = Function.call.bind(
  SyntaxError.prototype.message
);
export = SyntaxErrorPrototypeMessage;
