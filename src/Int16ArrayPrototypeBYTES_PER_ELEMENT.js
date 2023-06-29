/** @type {(that: Int16Array, ...a: Parameters<typeof Int16Array.prototype.BYTES_PER_ELEMENT>) => ReturnType<typeof Int16Array.prototype.BYTES_PER_ELEMENT>} */
const Int16ArrayPrototypeBYTES_PER_ELEMENT = Object.call.bind(
  Int16Array.prototype.BYTES_PER_ELEMENT
);
module.exports = Int16ArrayPrototypeBYTES_PER_ELEMENT;
