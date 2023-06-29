/** @type {(this: ArrayBuffer, ...a: Parameters<typeof ArrayBuffer.prototype.slice>) => ReturnType<typeof ArrayBuffer.prototype.slice>} */
const ArrayBufferPrototypeSlice = Object.call.bind(ArrayBuffer.prototype.slice);
module.exports = ArrayBufferPrototypeSlice;
