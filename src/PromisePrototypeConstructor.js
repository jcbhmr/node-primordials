/** @type {(this: Promise, ...a: Parameters<typeof Promise.prototype.constructor>) => ReturnType<typeof Promise.prototype.constructor>} */
const PromisePrototypeConstructor = Object.call.bind(
  Promise.prototype.constructor
);
module.exports = PromisePrototypeConstructor;
