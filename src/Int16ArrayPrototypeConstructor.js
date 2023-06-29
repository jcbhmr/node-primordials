/** @type {(this: Int16Array, ...a: Parameters<typeof Int16Array.prototype.constructor>) => ReturnType<typeof Int16Array.prototype.constructor>} */
const Int16ArrayPrototypeConstructor = Object.call.bind(
  Int16Array.prototype.constructor
);
module.exports = Int16ArrayPrototypeConstructor;
