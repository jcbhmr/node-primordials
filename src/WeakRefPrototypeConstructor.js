/** @type {(that: WeakRef, ...a: Parameters<typeof WeakRef.prototype.constructor>) => ReturnType<typeof WeakRef.prototype.constructor>} */
const WeakRefPrototypeConstructor = Object.call.bind(
  WeakRef.prototype.constructor
);
module.exports = WeakRefPrototypeConstructor;
