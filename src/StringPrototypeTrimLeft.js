/** @type {(this: String, ...a: Parameters<typeof String.prototype.trimLeft>) => ReturnType<typeof String.prototype.trimLeft>} */
const StringPrototypeTrimLeft = Object.call.bind(String.prototype.trimLeft);
module.exports = StringPrototypeTrimLeft;
