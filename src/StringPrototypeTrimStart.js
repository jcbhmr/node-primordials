/** @type {(this: String, ...a: Parameters<typeof String.prototype.trimStart>) => ReturnType<typeof String.prototype.trimStart>} */
const StringPrototypeTrimStart = Object.call.bind(String.prototype.trimStart);
module.exports = StringPrototypeTrimStart;
