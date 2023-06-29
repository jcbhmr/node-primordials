/** @type {(that: String, ...a: Parameters<typeof String.prototype.valueOf>) => ReturnType<typeof String.prototype.valueOf>} */
const StringPrototypeValueOf = Object.call.bind(String.prototype.valueOf);
module.exports = StringPrototypeValueOf;
