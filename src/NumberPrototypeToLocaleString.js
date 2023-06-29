/** @type {(this: Number, ...a: Parameters<typeof Number.prototype.toLocaleString>) => ReturnType<typeof Number.prototype.toLocaleString>} */
const NumberPrototypeToLocaleString = Object.call.bind(
  Number.prototype.toLocaleString
);
module.exports = NumberPrototypeToLocaleString;
