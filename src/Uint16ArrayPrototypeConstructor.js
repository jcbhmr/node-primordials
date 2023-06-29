/** @type {(that: Uint16Array, ...a: Parameters<typeof Uint16Array.prototype.constructor>) => ReturnType<typeof Uint16Array.prototype.constructor>} */
const Uint16ArrayPrototypeConstructor = Object.call.bind(
  Uint16Array.prototype.constructor
);
module.exports = Uint16ArrayPrototypeConstructor;
