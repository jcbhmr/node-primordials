/** @type {(that: Array, ...a: Parameters<typeof Array.prototype.flat>) => ReturnType<typeof Array.prototype.flat>} */
const ArrayPrototypeFlat = Object.call.bind(Array.prototype.flat);
module.exports = ArrayPrototypeFlat;
