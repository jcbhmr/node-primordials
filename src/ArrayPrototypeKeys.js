/** @type {(that: Array, ...a: Parameters<typeof Array.prototype.keys>) => ReturnType<typeof Array.prototype.keys>} */
const ArrayPrototypeKeys = Object.call.bind(Array.prototype.keys);
module.exports = ArrayPrototypeKeys;
