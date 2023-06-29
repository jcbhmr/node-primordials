/** @type {(v: typeof RegExp.lastParen) => void} */
const RegExpSetLastParen = Object.getOwnPropertyDescriptor(
  RegExp,
  "lastParen"
).set;
module.exports = RegExpSetLastParen;
