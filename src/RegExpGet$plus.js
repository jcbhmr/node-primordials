/** @type {() => typeof RegExp["$+"]} */
const RegExpGet$plus = Object.getOwnPropertyDescriptor(RegExp, "$+").get;
module.exports = RegExpGet$plus;
