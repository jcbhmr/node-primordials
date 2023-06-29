/** @type {(v: typeof RegExp.$+) => void} */
const RegExpSet$plus = Object.getOwnPropertyDescriptor(RegExp, "$+").set;
module.exports = RegExpSet$plus;
