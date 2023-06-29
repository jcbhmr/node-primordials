/** @type {(that: String, ...a: Parameters<typeof String.prototype.substr>) => ReturnType<typeof String.prototype.substr>} */
const StringPrototypeSubstr = Object.call.bind(String.prototype.substr);
module.exports = StringPrototypeSubstr;
