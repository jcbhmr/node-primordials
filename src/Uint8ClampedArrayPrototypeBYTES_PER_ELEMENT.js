/** @type {(this: Uint8ClampedArray, ...a: Parameters<typeof Uint8ClampedArray.prototype.BYTES_PER_ELEMENT>) => ReturnType<typeof Uint8ClampedArray.prototype.BYTES_PER_ELEMENT>} */
const Uint8ClampedArrayPrototypeBYTES_PER_ELEMENT = Object.call.bind(
  Uint8ClampedArray.prototype.BYTES_PER_ELEMENT
);
module.exports = Uint8ClampedArrayPrototypeBYTES_PER_ELEMENT;
