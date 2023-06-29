/** @type {(that: Set, ...a: Parameters<typeof Set.prototype.has>) => ReturnType<typeof Set.prototype.has>} */
const SetPrototypeHas = Object.call.bind(Set.prototype.has);
module.exports = SetPrototypeHas;
