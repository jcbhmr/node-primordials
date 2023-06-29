/** @type {(that: Number, ...a: Parameters<typeof Number.prototype.toPrecision>) => ReturnType<typeof Number.prototype.toPrecision>} */
const NumberPrototypeToPrecision = Object.call.bind(
  Number.prototype.toPrecision
);
module.exports = NumberPrototypeToPrecision;
