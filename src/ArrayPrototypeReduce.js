/** @type {(this: Array, ...a: Parameters<typeof Array.prototype.reduce>) => ReturnType<typeof Array.prototype.reduce>} */
const ArrayPrototypeReduce = Object.call.bind(Array.prototype.reduce);
module.exports = ArrayPrototypeReduce;
