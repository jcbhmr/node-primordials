/** @type {(this: Float32Array, ...a: Parameters<typeof Float32Array.prototype.BYTES_PER_ELEMENT>) => ReturnType<typeof Float32Array.prototype.BYTES_PER_ELEMENT>} */
const Float32ArrayPrototypeBYTES_PER_ELEMENT = Object.call.bind(
  Float32Array.prototype.BYTES_PER_ELEMENT
);
module.exports = Float32ArrayPrototypeBYTES_PER_ELEMENT;
