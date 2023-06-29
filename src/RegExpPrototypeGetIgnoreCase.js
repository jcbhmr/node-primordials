/** @type {(this: RegExp) => typeof RegExp.prototype.ignoreCase} */
const RegExpPrototypeGetIgnoreCase = Object.call.bind(
  Object.getOwnPropertyDescriptor(RegExp.prototype, "ignoreCase").get
);
module.exports = RegExpPrototypeGetIgnoreCase;
