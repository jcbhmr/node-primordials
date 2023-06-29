/** @type {(that: Array, ...a: Parameters<typeof Array.prototype.every>) => ReturnType<typeof Array.prototype.every>} */
const ArrayPrototypeEvery = Object.call.bind(Array.prototype.every);
module.exports = ArrayPrototypeEvery;
