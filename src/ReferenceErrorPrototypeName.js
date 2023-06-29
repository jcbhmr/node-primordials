/** @type {(this: ReferenceError, ...a: Parameters<typeof ReferenceError.prototype.name>) => ReturnType<typeof ReferenceError.prototype.name>} */
const ReferenceErrorPrototypeName = Object.call.bind(
  ReferenceError.prototype.name
);
module.exports = ReferenceErrorPrototypeName;
