/** @type {() => typeof RegExp.$2} */
const RegExpGet$2 = Object.getOwnPropertyDescriptor(RegExp, "$2").get;
module.exports = RegExpGet$2;
