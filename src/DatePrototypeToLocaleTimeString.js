/** @type {(this: Date, ...a: Parameters<typeof Date.prototype.toLocaleTimeString>) => ReturnType<typeof Date.prototype.toLocaleTimeString>} */
const DatePrototypeToLocaleTimeString = Object.call.bind(
  Date.prototype.toLocaleTimeString
);
module.exports = DatePrototypeToLocaleTimeString;
