/** @type {(that: String, ...a: Parameters<typeof String.prototype.fixed>) => ReturnType<typeof String.prototype.fixed>} */
const StringPrototypeFixed = Object.call.bind(String.prototype.fixed);
module.exports = StringPrototypeFixed;
