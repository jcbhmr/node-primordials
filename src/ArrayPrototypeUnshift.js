/** @type {(that: Array, ...a: Parameters<typeof Array.prototype.unshift>) => ReturnType<typeof Array.prototype.unshift>} */
const ArrayPrototypeUnshift = Object.call.bind(Array.prototype.unshift);
module.exports = ArrayPrototypeUnshift;
