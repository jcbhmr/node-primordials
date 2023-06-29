/** @type {(this: Int8Array, ...a: Parameters<typeof Int8Array.prototype.constructor>) => ReturnType<typeof Int8Array.prototype.constructor>} */
const Int8ArrayPrototypeConstructor = Object.call.bind(
  Int8Array.prototype.constructor
);
module.exports = Int8ArrayPrototypeConstructor;
