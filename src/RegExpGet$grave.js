/** @type {() => typeof RegExp["$`"]} */
const RegExpGet$grave = Object.getOwnPropertyDescriptor(RegExp, "$`").get;
module.exports = RegExpGet$grave;
