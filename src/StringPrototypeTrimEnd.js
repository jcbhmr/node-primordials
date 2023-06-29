/** @type {(this: String, ...a: Parameters<typeof String.prototype.trimEnd>) => ReturnType<typeof String.prototype.trimEnd>} */
const StringPrototypeTrimEnd = Object.call.bind(String.prototype.trimEnd);
module.exports = StringPrototypeTrimEnd;
