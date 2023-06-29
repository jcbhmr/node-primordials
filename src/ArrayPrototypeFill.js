/** @type {(that: Array, ...a: Parameters<typeof Array.prototype.fill>) => ReturnType<typeof Array.prototype.fill>} */
const ArrayPrototypeFill = Object.call.bind(Array.prototype.fill);
module.exports = ArrayPrototypeFill;
