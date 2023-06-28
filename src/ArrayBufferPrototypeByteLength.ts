const ArrayBufferPrototypeByteLength = Function.call.bind(
  ArrayBuffer.prototype.byteLength
);
export = ArrayBufferPrototypeByteLength;
