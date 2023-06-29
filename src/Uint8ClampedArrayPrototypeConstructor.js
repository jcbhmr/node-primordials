/** @type {(this: Uint8ClampedArray, ...a: Parameters<typeof Uint8ClampedArray.prototype.constructor>) => ReturnType<typeof Uint8ClampedArray.prototype.constructor>} */
const Uint8ClampedArrayPrototypeConstructor = Object.call.bind(
  Uint8ClampedArray.prototype.constructor
);
module.exports = Uint8ClampedArrayPrototypeConstructor;
