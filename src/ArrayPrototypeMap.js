/** @type {(this: Array, ...a: Parameters<typeof Array.prototype.map>) => ReturnType<typeof Array.prototype.map>} */
const ArrayPrototypeMap = Object.call.bind(Array.prototype.map);
module.exports = ArrayPrototypeMap;
