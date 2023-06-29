/** @type {(this: Set, ...a: Parameters<typeof Set.prototype.entries>) => ReturnType<typeof Set.prototype.entries>} */
const SetPrototypeEntries = Object.call.bind(Set.prototype.entries);
module.exports = SetPrototypeEntries;
