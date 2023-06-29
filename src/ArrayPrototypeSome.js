/** @type {(this: Array, ...a: Parameters<typeof Array.prototype.some>) => ReturnType<typeof Array.prototype.some>} */
const ArrayPrototypeSome = Object.call.bind(Array.prototype.some);
module.exports = ArrayPrototypeSome;
