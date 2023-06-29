/** @type {(that: BigInt64Array, ...a: Parameters<typeof BigInt64Array.prototype.BYTES_PER_ELEMENT>) => ReturnType<typeof BigInt64Array.prototype.BYTES_PER_ELEMENT>} */
const BigInt64ArrayPrototypeBYTES_PER_ELEMENT = Object.call.bind(
  BigInt64Array.prototype.BYTES_PER_ELEMENT
);
module.exports = BigInt64ArrayPrototypeBYTES_PER_ELEMENT;
