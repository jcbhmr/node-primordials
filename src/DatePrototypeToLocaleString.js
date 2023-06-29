/** @type {(this: Date, ...a: Parameters<typeof Date.prototype.toLocaleString>) => ReturnType<typeof Date.prototype.toLocaleString>} */
const DatePrototypeToLocaleString = Object.call.bind(
  Date.prototype.toLocaleString
);
module.exports = DatePrototypeToLocaleString;
