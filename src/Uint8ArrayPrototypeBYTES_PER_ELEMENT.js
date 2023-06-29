/** @type {(that: Uint8Array, ...a: Parameters<typeof Uint8Array.prototype.BYTES_PER_ELEMENT>) => ReturnType<typeof Uint8Array.prototype.BYTES_PER_ELEMENT>} */
const Uint8ArrayPrototypeBYTES_PER_ELEMENT = Object.call.bind(
  Uint8Array.prototype.BYTES_PER_ELEMENT
);
module.exports = Uint8ArrayPrototypeBYTES_PER_ELEMENT;
