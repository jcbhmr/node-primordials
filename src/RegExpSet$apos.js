/** @type {(v: typeof RegExp["$'"]) => void} */
const RegExpSet$apos = Object.getOwnPropertyDescriptor(RegExp, "$'").set;
module.exports = RegExpSet$apos;
