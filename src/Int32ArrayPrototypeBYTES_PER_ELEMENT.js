/** @type {(that: Int32Array, ...a: Parameters<typeof Int32Array.prototype.BYTES_PER_ELEMENT>) => ReturnType<typeof Int32Array.prototype.BYTES_PER_ELEMENT>} */
const Int32ArrayPrototypeBYTES_PER_ELEMENT = Object.call.bind(
  Int32Array.prototype.BYTES_PER_ELEMENT
);
module.exports = Int32ArrayPrototypeBYTES_PER_ELEMENT;
