/** @type {(that: RegExp) => typeof RegExp.prototype.source} */
const RegExpPrototypeGetSource = Object.call.bind(
  Object.getOwnPropertyDescriptor(RegExp.prototype, "source").get
);
module.exports = RegExpPrototypeGetSource;
