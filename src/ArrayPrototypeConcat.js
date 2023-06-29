/** @type {(this: Array, ...a: Parameters<typeof Array.prototype.concat>) => ReturnType<typeof Array.prototype.concat>} */
const ArrayPrototypeConcat = Object.call.bind(Array.prototype.concat);
module.exports = ArrayPrototypeConcat;
