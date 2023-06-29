/** @type {(that: Array, ...a: Parameters<typeof Array.prototype.copyWithin>) => ReturnType<typeof Array.prototype.copyWithin>} */
const ArrayPrototypeCopyWithin = Object.call.bind(Array.prototype.copyWithin);
module.exports = ArrayPrototypeCopyWithin;
