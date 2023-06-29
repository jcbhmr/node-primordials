/** @type {(that: ReferenceError, ...a: Parameters<typeof ReferenceError.prototype.constructor>) => ReturnType<typeof ReferenceError.prototype.constructor>} */
const ReferenceErrorPrototypeConstructor = Object.call.bind(
  ReferenceError.prototype.constructor
);
module.exports = ReferenceErrorPrototypeConstructor;
