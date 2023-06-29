/** @type {() => typeof RegExp.lastParen} */
const RegExpGetLastParen = Object.getOwnPropertyDescriptor(
  RegExp,
  "lastParen"
).get;
module.exports = RegExpGetLastParen;
