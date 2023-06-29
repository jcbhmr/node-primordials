/** @type {(this: Set, ...a: Parameters<typeof Set.prototype.delete>) => ReturnType<typeof Set.prototype.delete>} */
const SetPrototypeDelete = Object.call.bind(Set.prototype.delete);
module.exports = SetPrototypeDelete;
