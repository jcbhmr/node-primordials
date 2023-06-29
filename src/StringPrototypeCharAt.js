/** @type {(this: String, ...a: Parameters<typeof String.prototype.charAt>) => ReturnType<typeof String.prototype.charAt>} */
const StringPrototypeCharAt = Object.call.bind(String.prototype.charAt);
module.exports = StringPrototypeCharAt;
