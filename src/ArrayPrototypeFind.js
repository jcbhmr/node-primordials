/** @type {(this: Array, ...a: Parameters<typeof Array.prototype.find>) => ReturnType<typeof Array.prototype.find>} */
const ArrayPrototypeFind = Object.call.bind(Array.prototype.find);
module.exports = ArrayPrototypeFind;
