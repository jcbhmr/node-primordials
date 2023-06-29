/** @type {(this: AggregateError, ...a: Parameters<typeof AggregateError.prototype.constructor>) => ReturnType<typeof AggregateError.prototype.constructor>} */
const AggregateErrorPrototypeConstructor = Object.call.bind(
  AggregateError.prototype.constructor
);
module.exports = AggregateErrorPrototypeConstructor;
