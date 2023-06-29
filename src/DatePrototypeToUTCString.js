/** @type {(that: Date, ...a: Parameters<typeof Date.prototype.toUTCString>) => ReturnType<typeof Date.prototype.toUTCString>} */
const DatePrototypeToUTCString = Object.call.bind(Date.prototype.toUTCString);
module.exports = DatePrototypeToUTCString;
