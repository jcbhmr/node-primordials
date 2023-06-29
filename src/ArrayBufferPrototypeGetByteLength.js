/** @type {(this: ArrayBuffer) => typeof ArrayBuffer.prototype.byteLength} */
const ArrayBufferPrototypeGetByteLength = Object.call.bind(
  Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get
);
module.exports = ArrayBufferPrototypeGetByteLength;
