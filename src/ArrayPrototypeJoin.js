/** @type {(that: Array, ...a: Parameters<typeof Array.prototype.join>) => ReturnType<typeof Array.prototype.join>} */
const ArrayPrototypeJoin = Object.call.bind(Array.prototype.join);
module.exports = ArrayPrototypeJoin;
