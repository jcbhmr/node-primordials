/** @type {(that: Uint32Array, ...a: Parameters<typeof Uint32Array.prototype.constructor>) => ReturnType<typeof Uint32Array.prototype.constructor>} */
const Uint32ArrayPrototypeConstructor = Object.call.bind(
  Uint32Array.prototype.constructor
);
module.exports = Uint32ArrayPrototypeConstructor;
