/** @type {(that: Array, ...a: Parameters<typeof Array.prototype.findLast>) => ReturnType<typeof Array.prototype.findLast>} */
const ArrayPrototypeFindLast = Object.call.bind(Array.prototype.findLast);
module.exports = ArrayPrototypeFindLast;
