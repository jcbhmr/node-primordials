/** @type {(that: Array, ...a: Parameters<typeof Array.prototype.findLastIndex>) => ReturnType<typeof Array.prototype.findLastIndex>} */
const ArrayPrototypeFindLastIndex = Object.call.bind(
  Array.prototype.findLastIndex
);
module.exports = ArrayPrototypeFindLastIndex;
