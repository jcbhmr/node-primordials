/** @type {(that: Set, ...a: Parameters<typeof Set.prototype.clear>) => ReturnType<typeof Set.prototype.clear>} */
const SetPrototypeClear = Object.call.bind(Set.prototype.clear);
module.exports = SetPrototypeClear;
