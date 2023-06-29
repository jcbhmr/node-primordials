/** @type {(this: Date, ...a: Parameters<typeof Date.prototype.valueOf>) => ReturnType<typeof Date.prototype.valueOf>} */
const DatePrototypeValueOf = Object.call.bind(Date.prototype.valueOf);
module.exports = DatePrototypeValueOf;
