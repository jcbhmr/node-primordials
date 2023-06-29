/** @type {(that: String, ...a: Parameters<typeof String.prototype.codePointAt>) => ReturnType<typeof String.prototype.codePointAt>} */
const StringPrototypeCodePointAt = Object.call.bind(
  String.prototype.codePointAt
);
module.exports = StringPrototypeCodePointAt;
