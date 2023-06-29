/** @type {(that: Date, ...a: Parameters<typeof Date.prototype.toGMTString>) => ReturnType<typeof Date.prototype.toGMTString>} */
const DatePrototypeToGMTString = Object.call.bind(Date.prototype.toGMTString);
module.exports = DatePrototypeToGMTString;
