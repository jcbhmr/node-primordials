/** @type {(this: WeakSet, ...a: Parameters<typeof WeakSet.prototype.has>) => ReturnType<typeof WeakSet.prototype.has>} */
const WeakSetPrototypeHas = Object.call.bind(WeakSet.prototype.has);
module.exports = WeakSetPrototypeHas;
