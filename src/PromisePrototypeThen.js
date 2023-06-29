/** @type {(this: Promise, ...a: Parameters<typeof Promise.prototype.then>) => ReturnType<typeof Promise.prototype.then>} */
const PromisePrototypeThen = Object.call.bind(Promise.prototype.then);
module.exports = PromisePrototypeThen;
