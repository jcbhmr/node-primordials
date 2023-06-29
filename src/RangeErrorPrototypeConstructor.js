/** @type {(this: RangeError, ...a: Parameters<typeof RangeError.prototype.constructor>) => ReturnType<typeof RangeError.prototype.constructor>} */
const RangeErrorPrototypeConstructor = Object.call.bind(
  RangeError.prototype.constructor
);
module.exports = RangeErrorPrototypeConstructor;
