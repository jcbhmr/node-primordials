/** @type {(v: typeof RegExp.leftContext) => void} */
const RegExpSetLeftContext = Object.getOwnPropertyDescriptor(
  RegExp,
  "leftContext"
).set;
module.exports = RegExpSetLeftContext;
