/** @type {() => typeof RegExp.$_} */
const RegExpGet$_ = Object.getOwnPropertyDescriptor(RegExp, "$_").get;
module.exports = RegExpGet$_;
