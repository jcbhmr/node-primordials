/** @type {(v: typeof RegExp.rightContext) => void} */
const RegExpSetRightContext = Object.getOwnPropertyDescriptor(
  RegExp,
  "rightContext"
).set;
module.exports = RegExpSetRightContext;
