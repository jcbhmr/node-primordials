/** @type {(that: WeakMap, ...a: Parameters<typeof WeakMap.prototype.delete>) => ReturnType<typeof WeakMap.prototype.delete>} */
const WeakMapPrototypeDelete = Object.call.bind(WeakMap.prototype.delete);
module.exports = WeakMapPrototypeDelete;
