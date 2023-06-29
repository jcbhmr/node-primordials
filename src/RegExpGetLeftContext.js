/** @type {() => typeof RegExp.leftContext} */
const RegExpGetLeftContext = Object.getOwnPropertyDescriptor(
  RegExp,
  "leftContext"
).get;
module.exports = RegExpGetLeftContext;
