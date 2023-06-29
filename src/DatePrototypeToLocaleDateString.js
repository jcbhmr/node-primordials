/** @type {(that: Date, ...a: Parameters<typeof Date.prototype.toLocaleDateString>) => ReturnType<typeof Date.prototype.toLocaleDateString>} */
const DatePrototypeToLocaleDateString = Object.call.bind(
  Date.prototype.toLocaleDateString
);
module.exports = DatePrototypeToLocaleDateString;
