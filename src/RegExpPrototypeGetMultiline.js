/** @type {(that: RegExp) => typeof RegExp.prototype.multiline} */
const RegExpPrototypeGetMultiline = Object.call.bind(
  Object.getOwnPropertyDescriptor(RegExp.prototype, "multiline").get
);
module.exports = RegExpPrototypeGetMultiline;
