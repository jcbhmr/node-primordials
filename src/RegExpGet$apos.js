/** @type {() => typeof RegExp["$'"]} */
const RegExpGet$apos = Object.getOwnPropertyDescriptor(RegExp, "$'").get;
module.exports = RegExpGet$apos;
