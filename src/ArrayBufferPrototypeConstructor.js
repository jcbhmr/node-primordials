/** @type {(this: ArrayBuffer, ...a: Parameters<typeof ArrayBuffer.prototype.constructor>) => ReturnType<typeof ArrayBuffer.prototype.constructor>} */
const ArrayBufferPrototypeConstructor = Object.call.bind(
  ArrayBuffer.prototype.constructor
);
module.exports = ArrayBufferPrototypeConstructor;
