/** @type {() => typeof RegExp.lastMatch} */
const RegExpGetLastMatch = Object.getOwnPropertyDescriptor(
  RegExp,
  "lastMatch"
).get;
module.exports = RegExpGetLastMatch;
