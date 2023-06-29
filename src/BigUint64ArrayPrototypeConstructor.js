/** @type {(this: BigUint64Array, ...a: Parameters<typeof BigUint64Array.prototype.constructor>) => ReturnType<typeof BigUint64Array.prototype.constructor>} */
const BigUint64ArrayPrototypeConstructor = Object.call.bind(
  BigUint64Array.prototype.constructor
);
module.exports = BigUint64ArrayPrototypeConstructor;
