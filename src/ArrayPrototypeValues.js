/** @type {(this: Array, ...a: Parameters<typeof Array.prototype.values>) => ReturnType<typeof Array.prototype.values>} */
const ArrayPrototypeValues = Object.call.bind(Array.prototype.values);
module.exports = ArrayPrototypeValues;
