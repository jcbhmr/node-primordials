/** @type {(this: Number, ...a: Parameters<typeof Number.prototype.constructor>) => ReturnType<typeof Number.prototype.constructor>} */
const NumberPrototypeConstructor = Object.call.bind(
  Number.prototype.constructor
);
module.exports = NumberPrototypeConstructor;
