const AggregateErrorPrototypeMessage = Function.call.bind(
  AggregateError.prototype.message
);
export = AggregateErrorPrototypeMessage;
