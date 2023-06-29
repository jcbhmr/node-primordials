/** @type {(v: typeof RegExp["$`"]) => void} */
const RegExpSet$grave = Object.getOwnPropertyDescriptor(RegExp, "$`").set;
module.exports = RegExpSet$grave;
