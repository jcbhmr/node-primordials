/** @type {(v: typeof RegExp.input) => void} */
const RegExpSetInput = Object.getOwnPropertyDescriptor(RegExp, "input").set;
module.exports = RegExpSetInput;
