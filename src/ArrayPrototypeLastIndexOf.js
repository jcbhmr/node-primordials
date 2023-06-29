/** @type {(this: Array, ...a: Parameters<typeof Array.prototype.lastIndexOf>) => ReturnType<typeof Array.prototype.lastIndexOf>} */
const ArrayPrototypeLastIndexOf = Object.call.bind(Array.prototype.lastIndexOf);
module.exports = ArrayPrototypeLastIndexOf;
