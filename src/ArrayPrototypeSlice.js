/** @type {(this: Array, ...a: Parameters<typeof Array.prototype.slice>) => ReturnType<typeof Array.prototype.slice>} */
const ArrayPrototypeSlice = Object.call.bind(Array.prototype.slice);
module.exports = ArrayPrototypeSlice;
