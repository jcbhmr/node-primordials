/** @type {(that: RegExp) => typeof RegExp.prototype.sticky} */
const RegExpPrototypeGetSticky = Object.call.bind(
  Object.getOwnPropertyDescriptor(RegExp.prototype, "sticky").get
);
module.exports = RegExpPrototypeGetSticky;
