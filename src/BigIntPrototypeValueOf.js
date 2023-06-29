/** @type {(this: BigInt, ...a: Parameters<typeof BigInt.prototype.valueOf>) => ReturnType<typeof BigInt.prototype.valueOf>} */
const BigIntPrototypeValueOf = Object.call.bind(BigInt.prototype.valueOf);
module.exports = BigIntPrototypeValueOf;
