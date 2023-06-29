/** @type {(that: Array, ...a: Parameters<typeof Array.prototype.filter>) => ReturnType<typeof Array.prototype.filter>} */
const ArrayPrototypeFilter = Object.call.bind(Array.prototype.filter);
module.exports = ArrayPrototypeFilter;
