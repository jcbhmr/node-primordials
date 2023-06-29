/** @type {(that: Array, ...a: Parameters<typeof Array.prototype.push>) => ReturnType<typeof Array.prototype.push>} */
const ArrayPrototypePush = Object.call.bind(Array.prototype.push);
module.exports = ArrayPrototypePush;
