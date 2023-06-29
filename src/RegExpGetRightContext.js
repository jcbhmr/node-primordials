/** @type {() => typeof RegExp.rightContext} */
const RegExpGetRightContext = Object.getOwnPropertyDescriptor(
  RegExp,
  "rightContext"
).get;
module.exports = RegExpGetRightContext;
