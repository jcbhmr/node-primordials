/** @type {(that: RegExp) => typeof RegExp.prototype.flags} */
const RegExpPrototypeGetFlags = Object.call.bind(
  Object.getOwnPropertyDescriptor(RegExp.prototype, "flags").get
);
module.exports = RegExpPrototypeGetFlags;
