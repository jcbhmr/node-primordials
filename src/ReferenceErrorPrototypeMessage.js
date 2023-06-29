/** @type {(this: ReferenceError, ...a: Parameters<typeof ReferenceError.prototype.message>) => ReturnType<typeof ReferenceError.prototype.message>} */
const ReferenceErrorPrototypeMessage = Object.call.bind(
  ReferenceError.prototype.message
);
module.exports = ReferenceErrorPrototypeMessage;
