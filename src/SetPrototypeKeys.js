/** @type {(that: Set, ...a: Parameters<typeof Set.prototype.keys>) => ReturnType<typeof Set.prototype.keys>} */
const SetPrototypeKeys = Object.call.bind(Set.prototype.keys);
module.exports = SetPrototypeKeys;
