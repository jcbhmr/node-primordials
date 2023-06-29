/** @type {(v: typeof RegExp["$&"]) => void} */
const RegExpSet$amp = Object.getOwnPropertyDescriptor(RegExp, "$&").set;
module.exports = RegExpSet$amp;
