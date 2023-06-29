/** @type {(this: WeakSet, ...a: Parameters<typeof WeakSet.prototype.delete>) => ReturnType<typeof WeakSet.prototype.delete>} */
const WeakSetPrototypeDelete = Object.call.bind(WeakSet.prototype.delete);
module.exports = WeakSetPrototypeDelete;
