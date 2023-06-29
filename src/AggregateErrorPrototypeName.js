/** @type {(this: AggregateError, ...a: Parameters<typeof AggregateError.prototype.name>) => ReturnType<typeof AggregateError.prototype.name>} */
const AggregateErrorPrototypeName = Object.call.bind(
  AggregateError.prototype.name
);
module.exports = AggregateErrorPrototypeName;
