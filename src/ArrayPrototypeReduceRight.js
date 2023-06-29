/** @type {(this: Array, ...a: Parameters<typeof Array.prototype.reduceRight>) => ReturnType<typeof Array.prototype.reduceRight>} */
const ArrayPrototypeReduceRight = Object.call.bind(Array.prototype.reduceRight);
module.exports = ArrayPrototypeReduceRight;
