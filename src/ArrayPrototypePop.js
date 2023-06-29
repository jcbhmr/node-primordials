/** @type {(that: Array, ...a: Parameters<typeof Array.prototype.pop>) => ReturnType<typeof Array.prototype.pop>} */
const ArrayPrototypePop = Object.call.bind(Array.prototype.pop);
module.exports = ArrayPrototypePop;
