/** @type {(this: Number, ...a: Parameters<typeof Number.prototype.valueOf>) => ReturnType<typeof Number.prototype.valueOf>} */
const NumberPrototypeValueOf = Object.call.bind(Number.prototype.valueOf);
module.exports = NumberPrototypeValueOf;
