/** @type {(that: Set, ...a: Parameters<typeof Set.prototype.values>) => ReturnType<typeof Set.prototype.values>} */
const SetPrototypeValues = Object.call.bind(Set.prototype.values);
module.exports = SetPrototypeValues;
