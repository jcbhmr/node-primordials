/** @type {(this: WeakMap, ...a: Parameters<typeof WeakMap.prototype.constructor>) => ReturnType<typeof WeakMap.prototype.constructor>} */
const WeakMapPrototypeConstructor = Object.call.bind(
  WeakMap.prototype.constructor
);
module.exports = WeakMapPrototypeConstructor;
