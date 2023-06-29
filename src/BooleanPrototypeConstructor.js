/** @type {(this: Boolean, ...a: Parameters<typeof Boolean.prototype.constructor>) => ReturnType<typeof Boolean.prototype.constructor>} */
const BooleanPrototypeConstructor = Object.call.bind(
  Boolean.prototype.constructor
);
module.exports = BooleanPrototypeConstructor;
