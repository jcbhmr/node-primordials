/** @type {(that: Promise, ...a: Parameters<typeof Promise.prototype.finally>) => ReturnType<typeof Promise.prototype.finally>} */
const PromisePrototypeFinally = Object.call.bind(Promise.prototype.finally);
module.exports = PromisePrototypeFinally;
