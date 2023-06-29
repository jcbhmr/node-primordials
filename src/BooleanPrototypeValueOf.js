/** @type {(that: Boolean, ...a: Parameters<typeof Boolean.prototype.valueOf>) => ReturnType<typeof Boolean.prototype.valueOf>} */
const BooleanPrototypeValueOf = Object.call.bind(Boolean.prototype.valueOf);
module.exports = BooleanPrototypeValueOf;
