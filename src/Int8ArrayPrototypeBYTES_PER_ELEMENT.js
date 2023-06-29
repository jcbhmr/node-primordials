/** @type {(this: Int8Array, ...a: Parameters<typeof Int8Array.prototype.BYTES_PER_ELEMENT>) => ReturnType<typeof Int8Array.prototype.BYTES_PER_ELEMENT>} */
const Int8ArrayPrototypeBYTES_PER_ELEMENT = Object.call.bind(
  Int8Array.prototype.BYTES_PER_ELEMENT
);
module.exports = Int8ArrayPrototypeBYTES_PER_ELEMENT;
