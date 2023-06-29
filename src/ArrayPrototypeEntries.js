/** @type {(this: Array, ...a: Parameters<typeof Array.prototype.entries>) => ReturnType<typeof Array.prototype.entries>} */
const ArrayPrototypeEntries = Object.call.bind(Array.prototype.entries);
module.exports = ArrayPrototypeEntries;
