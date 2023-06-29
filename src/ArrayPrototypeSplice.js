/** @type {(this: Array, ...a: Parameters<typeof Array.prototype.splice>) => ReturnType<typeof Array.prototype.splice>} */
const ArrayPrototypeSplice = Object.call.bind(Array.prototype.splice);
module.exports = ArrayPrototypeSplice;
