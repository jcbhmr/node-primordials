/** @type {(that: Array, ...a: Parameters<typeof Array.prototype.shift>) => ReturnType<typeof Array.prototype.shift>} */
const ArrayPrototypeShift = Object.call.bind(Array.prototype.shift);
module.exports = ArrayPrototypeShift;
