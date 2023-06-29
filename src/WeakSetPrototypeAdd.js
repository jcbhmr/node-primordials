/** @type {(that: WeakSet, ...a: Parameters<typeof WeakSet.prototype.add>) => ReturnType<typeof WeakSet.prototype.add>} */
const WeakSetPrototypeAdd = Object.call.bind(WeakSet.prototype.add);
module.exports = WeakSetPrototypeAdd;
