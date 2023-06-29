/** @type {(that: RegExp) => typeof RegExp.prototype.hasIndices} */
const RegExpPrototypeGetHasIndices = Object.call.bind(
  Object.getOwnPropertyDescriptor(RegExp.prototype, "hasIndices").get
);
module.exports = RegExpPrototypeGetHasIndices;
