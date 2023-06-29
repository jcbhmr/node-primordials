/** @type {(that: Date, ...a: Parameters<typeof Date.prototype.toDateString>) => ReturnType<typeof Date.prototype.toDateString>} */
const DatePrototypeToDateString = Object.call.bind(Date.prototype.toDateString);
module.exports = DatePrototypeToDateString;
