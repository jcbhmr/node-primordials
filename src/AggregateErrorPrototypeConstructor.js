/**
 * @type {(
 *   that: any,
 *   ...a: ConstructorParameters<typeof AggregateError>
 * ) => AggregateError}
 */
const AggregateErrorPrototypeConstructor = Object.call.bind(
  AggregateError.prototype.constructor
);
module.exports = AggregateErrorPrototypeConstructor;
