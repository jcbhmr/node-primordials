/** @type {() => typeof RegExp["$&"]} */
const RegExpGet$amp = Object.getOwnPropertyDescriptor(RegExp, "$&").get;
module.exports = RegExpGet$amp;
