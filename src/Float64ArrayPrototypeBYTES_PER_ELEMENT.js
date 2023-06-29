/** @type {(that: Float64Array, ...a: Parameters<typeof Float64Array.prototype.BYTES_PER_ELEMENT>) => ReturnType<typeof Float64Array.prototype.BYTES_PER_ELEMENT>} */
const Float64ArrayPrototypeBYTES_PER_ELEMENT = Object.call.bind(
  Float64Array.prototype.BYTES_PER_ELEMENT
);
module.exports = Float64ArrayPrototypeBYTES_PER_ELEMENT;
