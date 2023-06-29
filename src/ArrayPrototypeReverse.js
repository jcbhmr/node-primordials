/** @type {(that: Array, ...a: Parameters<typeof Array.prototype.reverse>) => ReturnType<typeof Array.prototype.reverse>} */
const ArrayPrototypeReverse = Object.call.bind(Array.prototype.reverse);
module.exports = ArrayPrototypeReverse;
