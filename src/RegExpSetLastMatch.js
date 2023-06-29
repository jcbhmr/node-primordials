/** @type {(v: typeof RegExp.lastMatch) => void} */
const RegExpSetLastMatch = Object.getOwnPropertyDescriptor(
  RegExp,
  "lastMatch"
).set;
module.exports = RegExpSetLastMatch;
