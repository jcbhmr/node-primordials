/** @type {(this: RegExp, ...a: Parameters<typeof RegExp.prototype.toString>) => ReturnType<typeof RegExp.prototype.toString>} */
const RegExpPrototypeToString = Object.call.bind(RegExp.prototype.toString);
module.exports = RegExpPrototypeToString;
