/** @type {(this: Promise, ...a: Parameters<typeof Promise.prototype.catch>) => ReturnType<typeof Promise.prototype.catch>} */
const PromisePrototypeCatch = Object.call.bind(Promise.prototype.catch);
module.exports = PromisePrototypeCatch;
