/** @type {(this: Set, ...a: Parameters<typeof Set.prototype.constructor>) => ReturnType<typeof Set.prototype.constructor>} */
const SetPrototypeConstructor = Object.call.bind(Set.prototype.constructor);
module.exports = SetPrototypeConstructor;
