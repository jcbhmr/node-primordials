/** @type {(this: Array, ...a: Parameters<typeof Array.prototype.findIndex>) => ReturnType<typeof Array.prototype.findIndex>} */
const ArrayPrototypeFindIndex = Object.call.bind(Array.prototype.findIndex);
module.exports = ArrayPrototypeFindIndex;
