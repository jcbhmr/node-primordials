/** @type {(that: String, ...a: Parameters<typeof String.prototype.startsWith>) => ReturnType<typeof String.prototype.startsWith>} */
const StringPrototypeStartsWith = Object.call.bind(String.prototype.startsWith);
module.exports = StringPrototypeStartsWith;
