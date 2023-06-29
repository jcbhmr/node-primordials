/** @type {() => typeof RegExp.$1} */
const RegExpGet$1 = Object.getOwnPropertyDescriptor(RegExp, "$1").get;
module.exports = RegExpGet$1;
