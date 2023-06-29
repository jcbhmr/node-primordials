/** @type {(this: Array, ...a: Parameters<typeof Array.prototype.indexOf>) => ReturnType<typeof Array.prototype.indexOf>} */
const ArrayPrototypeIndexOf = Object.call.bind(Array.prototype.indexOf);
module.exports = ArrayPrototypeIndexOf;
