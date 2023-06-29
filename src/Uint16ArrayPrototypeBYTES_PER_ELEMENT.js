/** @type {(that: Uint16Array, ...a: Parameters<typeof Uint16Array.prototype.BYTES_PER_ELEMENT>) => ReturnType<typeof Uint16Array.prototype.BYTES_PER_ELEMENT>} */
const Uint16ArrayPrototypeBYTES_PER_ELEMENT = Object.call.bind(
  Uint16Array.prototype.BYTES_PER_ELEMENT
);
module.exports = Uint16ArrayPrototypeBYTES_PER_ELEMENT;
