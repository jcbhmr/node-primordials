/** @type {(that: String, ...a: Parameters<typeof String.prototype.trim>) => ReturnType<typeof String.prototype.trim>} */
const StringPrototypeTrim = Object.call.bind(String.prototype.trim);
module.exports = StringPrototypeTrim;
