/** @type {(this: BigInt, ...a: Parameters<typeof BigInt.prototype.constructor>) => ReturnType<typeof BigInt.prototype.constructor>} */
const BigIntPrototypeConstructor = Object.call.bind(
  BigInt.prototype.constructor
);
module.exports = BigIntPrototypeConstructor;
