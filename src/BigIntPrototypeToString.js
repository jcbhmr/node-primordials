/** @type {(this: BigInt, ...a: Parameters<typeof BigInt.prototype.toString>) => ReturnType<typeof BigInt.prototype.toString>} */
const BigIntPrototypeToString = Object.call.bind(BigInt.prototype.toString);
module.exports = BigIntPrototypeToString;
