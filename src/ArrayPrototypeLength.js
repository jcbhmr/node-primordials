/** @type {(that: Array, ...a: Parameters<typeof Array.prototype.length>) => ReturnType<typeof Array.prototype.length>} */
const ArrayPrototypeLength = Object.call.bind(Array.prototype.length);
module.exports = ArrayPrototypeLength;
