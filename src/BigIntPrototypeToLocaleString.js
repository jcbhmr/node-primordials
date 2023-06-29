/** @type {(this: BigInt, ...a: Parameters<typeof BigInt.prototype.toLocaleString>) => ReturnType<typeof BigInt.prototype.toLocaleString>} */
const BigIntPrototypeToLocaleString = Object.call.bind(
  BigInt.prototype.toLocaleString
);
module.exports = BigIntPrototypeToLocaleString;
