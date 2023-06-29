/** @type {(that: WeakMap, ...a: Parameters<typeof WeakMap.prototype.set>) => ReturnType<typeof WeakMap.prototype.set>} */
const WeakMapPrototypeSet = Object.call.bind(WeakMap.prototype.set);
module.exports = WeakMapPrototypeSet;
