/** @type {(this: RegExp) => typeof RegExp.prototype.unicode} */
const RegExpPrototypeGetUnicode = Object.call.bind(
  Object.getOwnPropertyDescriptor(RegExp.prototype, "unicode").get
);
module.exports = RegExpPrototypeGetUnicode;
