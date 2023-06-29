/** @type {(this: BigInt64Array, ...a: Parameters<typeof BigInt64Array.prototype.constructor>) => ReturnType<typeof BigInt64Array.prototype.constructor>} */
const BigInt64ArrayPrototypeConstructor = Object.call.bind(
  BigInt64Array.prototype.constructor
);
module.exports = BigInt64ArrayPrototypeConstructor;
