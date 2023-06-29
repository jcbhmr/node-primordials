/** @type {(that: Array, ...a: Parameters<typeof Array.prototype.flatMap>) => ReturnType<typeof Array.prototype.flatMap>} */
const ArrayPrototypeFlatMap = Object.call.bind(Array.prototype.flatMap);
module.exports = ArrayPrototypeFlatMap;
