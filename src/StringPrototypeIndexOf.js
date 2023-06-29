/** @type {(that: String, ...a: Parameters<typeof String.prototype.indexOf>) => ReturnType<typeof String.prototype.indexOf>} */
const StringPrototypeIndexOf = Object.call.bind(String.prototype.indexOf);
module.exports = StringPrototypeIndexOf;
