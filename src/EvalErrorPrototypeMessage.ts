const EvalErrorPrototypeMessage = Function.call.bind(
  EvalError.prototype.message
);
export = EvalErrorPrototypeMessage;
