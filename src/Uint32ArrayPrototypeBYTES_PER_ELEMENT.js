/** @type {(that: Uint32Array, ...a: Parameters<typeof Uint32Array.prototype.BYTES_PER_ELEMENT>) => ReturnType<typeof Uint32Array.prototype.BYTES_PER_ELEMENT>} */
const Uint32ArrayPrototypeBYTES_PER_ELEMENT = Object.call.bind(
  Uint32Array.prototype.BYTES_PER_ELEMENT
);
module.exports = Uint32ArrayPrototypeBYTES_PER_ELEMENT;
