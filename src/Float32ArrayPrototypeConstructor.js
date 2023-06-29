/** @type {(this: Float32Array, ...a: Parameters<typeof Float32Array.prototype.constructor>) => ReturnType<typeof Float32Array.prototype.constructor>} */
const Float32ArrayPrototypeConstructor = Object.call.bind(
  Float32Array.prototype.constructor
);
module.exports = Float32ArrayPrototypeConstructor;
