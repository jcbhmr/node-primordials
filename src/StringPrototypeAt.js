/** @type {(that: String, ...a: Parameters<typeof String.prototype.at>) => ReturnType<typeof String.prototype.at>} */
const StringPrototypeAt = Object.call.bind(String.prototype.at);
module.exports = StringPrototypeAt;
