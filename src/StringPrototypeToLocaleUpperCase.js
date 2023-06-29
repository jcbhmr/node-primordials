/** @type {(that: String, ...a: Parameters<typeof String.prototype.toLocaleUpperCase>) => ReturnType<typeof String.prototype.toLocaleUpperCase>} */
const StringPrototypeToLocaleUpperCase = Object.call.bind(
  String.prototype.toLocaleUpperCase
);
module.exports = StringPrototypeToLocaleUpperCase;
