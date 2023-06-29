/** @type {(that: BigUint64Array, ...a: Parameters<typeof BigUint64Array.prototype.BYTES_PER_ELEMENT>) => ReturnType<typeof BigUint64Array.prototype.BYTES_PER_ELEMENT>} */
const BigUint64ArrayPrototypeBYTES_PER_ELEMENT = Object.call.bind(
  BigUint64Array.prototype.BYTES_PER_ELEMENT
);
module.exports = BigUint64ArrayPrototypeBYTES_PER_ELEMENT;
