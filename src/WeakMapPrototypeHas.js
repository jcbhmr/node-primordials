/** @type {(that: WeakMap, ...a: Parameters<typeof WeakMap.prototype.has>) => ReturnType<typeof WeakMap.prototype.has>} */
const WeakMapPrototypeHas = Object.call.bind(WeakMap.prototype.has);
module.exports = WeakMapPrototypeHas;
