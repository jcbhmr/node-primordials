/** @type {(this: Int32Array, ...a: Parameters<typeof Int32Array.prototype.constructor>) => ReturnType<typeof Int32Array.prototype.constructor>} */
const Int32ArrayPrototypeConstructor = Object.call.bind(
  Int32Array.prototype.constructor
);
module.exports = Int32ArrayPrototypeConstructor;
