/** @type {(that: WeakSet, ...a: Parameters<typeof WeakSet.prototype.constructor>) => ReturnType<typeof WeakSet.prototype.constructor>} */
const WeakSetPrototypeConstructor = Object.call.bind(
  WeakSet.prototype.constructor
);
module.exports = WeakSetPrototypeConstructor;
