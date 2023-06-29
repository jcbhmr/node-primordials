/** @type {(this: Array, ...a: Parameters<typeof Array.prototype.toString>) => ReturnType<typeof Array.prototype.toString>} */
const ArrayPrototypeToString = Object.call.bind(Array.prototype.toString);
module.exports = ArrayPrototypeToString;
