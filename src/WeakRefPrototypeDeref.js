/** @type {(this: WeakRef, ...a: Parameters<typeof WeakRef.prototype.deref>) => ReturnType<typeof WeakRef.prototype.deref>} */
const WeakRefPrototypeDeref = Object.call.bind(WeakRef.prototype.deref);
module.exports = WeakRefPrototypeDeref;
