/** @type {(that: Set, ...a: Parameters<typeof Set.prototype.add>) => ReturnType<typeof Set.prototype.add>} */
const SetPrototypeAdd = Object.call.bind(Set.prototype.add);
module.exports = SetPrototypeAdd;
