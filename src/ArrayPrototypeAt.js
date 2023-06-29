/** @type {(that: Array, ...a: Parameters<typeof Array.prototype.at>) => ReturnType<typeof Array.prototype.at>} */
const ArrayPrototypeAt = Object.call.bind(Array.prototype.at);
module.exports = ArrayPrototypeAt;
