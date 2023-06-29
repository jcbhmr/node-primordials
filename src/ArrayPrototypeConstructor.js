/** @type {(this: Array, ...a: Parameters<typeof Array.prototype.constructor>) => ReturnType<typeof Array.prototype.constructor>} */
const ArrayPrototypeConstructor = Object.call.bind(Array.prototype.constructor);
module.exports = ArrayPrototypeConstructor;
