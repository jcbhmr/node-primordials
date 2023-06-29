/** @type {(this: Uint8Array, ...a: Parameters<typeof Uint8Array.prototype.constructor>) => ReturnType<typeof Uint8Array.prototype.constructor>} */
const Uint8ArrayPrototypeConstructor = Object.call.bind(
  Uint8Array.prototype.constructor
);
module.exports = Uint8ArrayPrototypeConstructor;
