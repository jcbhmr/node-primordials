/** @type {(that: String, ...a: Parameters<typeof String.prototype.toString>) => ReturnType<typeof String.prototype.toString>} */
const StringPrototypeToString = Object.call.bind(String.prototype.toString);
module.exports = StringPrototypeToString;
