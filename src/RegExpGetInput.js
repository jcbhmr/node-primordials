/** @type {() => typeof RegExp.input} */
const RegExpGetInput = Object.getOwnPropertyDescriptor(RegExp, "input").get;
module.exports = RegExpGetInput;
