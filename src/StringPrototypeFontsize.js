/** @type {(that: String, ...a: Parameters<typeof String.prototype.fontsize>) => ReturnType<typeof String.prototype.fontsize>} */
const StringPrototypeFontsize = Object.call.bind(String.prototype.fontsize);
module.exports = StringPrototypeFontsize;
