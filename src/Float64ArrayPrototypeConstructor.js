/** @type {(that: Float64Array, ...a: Parameters<typeof Float64Array.prototype.constructor>) => ReturnType<typeof Float64Array.prototype.constructor>} */
const Float64ArrayPrototypeConstructor = Object.call.bind(
  Float64Array.prototype.constructor
);
module.exports = Float64ArrayPrototypeConstructor;
