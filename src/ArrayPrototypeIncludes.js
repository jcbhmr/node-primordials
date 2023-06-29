/** @type {(this: Array, ...a: Parameters<typeof Array.prototype.includes>) => ReturnType<typeof Array.prototype.includes>} */
const ArrayPrototypeIncludes = Object.call.bind(Array.prototype.includes);
module.exports = ArrayPrototypeIncludes;
