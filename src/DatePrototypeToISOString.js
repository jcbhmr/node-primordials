/** @type {(this: Date, ...a: Parameters<typeof Date.prototype.toISOString>) => ReturnType<typeof Date.prototype.toISOString>} */
const DatePrototypeToISOString = Object.call.bind(Date.prototype.toISOString);
module.exports = DatePrototypeToISOString;
