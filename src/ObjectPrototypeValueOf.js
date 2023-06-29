/** @type {(this: Object, ...a: Parameters<typeof Object.prototype.valueOf>) => ReturnType<typeof Object.prototype.valueOf>} */
const ObjectPrototypeValueOf = Object.call.bind(Object.prototype.valueOf);
module.exports = ObjectPrototypeValueOf;
