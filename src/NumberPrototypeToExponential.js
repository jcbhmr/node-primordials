/** @type {(that: Number, ...a: Parameters<typeof Number.prototype.toExponential>) => ReturnType<typeof Number.prototype.toExponential>} */
const NumberPrototypeToExponential = Object.call.bind(
  Number.prototype.toExponential
);
module.exports = NumberPrototypeToExponential;
