/** @type {(this: String, ...a: Parameters<typeof String.prototype.toLowerCase>) => ReturnType<typeof String.prototype.toLowerCase>} */
const StringPrototypeToLowerCase = Object.call.bind(
  String.prototype.toLowerCase
);
module.exports = StringPrototypeToLowerCase;
