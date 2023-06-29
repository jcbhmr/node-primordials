/** @type {(this: Array, ...a: Parameters<typeof Array.prototype.toLocaleString>) => ReturnType<typeof Array.prototype.toLocaleString>} */
const ArrayPrototypeToLocaleString = Object.call.bind(
  Array.prototype.toLocaleString
);
module.exports = ArrayPrototypeToLocaleString;
