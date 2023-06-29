/** @type {(that: RangeError, ...a: Parameters<typeof RangeError.prototype.name>) => ReturnType<typeof RangeError.prototype.name>} */
const RangeErrorPrototypeName = Object.call.bind(RangeError.prototype.name);
module.exports = RangeErrorPrototypeName;
