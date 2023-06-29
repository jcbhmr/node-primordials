/** @type {(that: RegExp) => typeof RegExp.prototype.dotAll} */
const RegExpPrototypeGetDotAll = Object.call.bind(
  Object.getOwnPropertyDescriptor(RegExp.prototype, "dotAll").get
);
module.exports = RegExpPrototypeGetDotAll;
