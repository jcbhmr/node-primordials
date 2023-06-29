/** @type {(that: RegExp) => typeof RegExp.prototype.global} */
const RegExpPrototypeGetGlobal = Object.call.bind(
  Object.getOwnPropertyDescriptor(RegExp.prototype, "global").get
);
module.exports = RegExpPrototypeGetGlobal;
