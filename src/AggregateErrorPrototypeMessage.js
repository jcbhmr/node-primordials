/** @type {(this: AggregateError, ...a: Parameters<typeof AggregateError.prototype.message>) => ReturnType<typeof AggregateError.prototype.message>} */
const AggregateErrorPrototypeMessage = Object.call.bind(
  AggregateError.prototype.message
);
module.exports = AggregateErrorPrototypeMessage;
