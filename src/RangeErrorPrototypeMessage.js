/** @type {(that: RangeError, ...a: Parameters<typeof RangeError.prototype.message>) => ReturnType<typeof RangeError.prototype.message>} */
const RangeErrorPrototypeMessage = Object.call.bind(
  RangeError.prototype.message
);
module.exports = RangeErrorPrototypeMessage;
