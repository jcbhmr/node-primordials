/** @type {(that: WeakMap, ...a: Parameters<typeof WeakMap.prototype.get>) => ReturnType<typeof WeakMap.prototype.get>} */
const WeakMapPrototypeGet = Object.call.bind(WeakMap.prototype.get);
module.exports = WeakMapPrototypeGet;
