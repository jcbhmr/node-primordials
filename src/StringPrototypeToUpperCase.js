/** @type {(that: String, ...a: Parameters<typeof String.prototype.toUpperCase>) => ReturnType<typeof String.prototype.toUpperCase>} */
const StringPrototypeToUpperCase = Object.call.bind(
  String.prototype.toUpperCase
);
module.exports = StringPrototypeToUpperCase;
