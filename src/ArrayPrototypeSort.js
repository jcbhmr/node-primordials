/** @type {(that: Array, ...a: Parameters<typeof Array.prototype.sort>) => ReturnType<typeof Array.prototype.sort>} */
const ArrayPrototypeSort = Object.call.bind(Array.prototype.sort);
module.exports = ArrayPrototypeSort;
