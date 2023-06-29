/** @type {(this: String, ...a: Parameters<typeof String.prototype.endsWith>) => ReturnType<typeof String.prototype.endsWith>} */
const StringPrototypeEndsWith = Object.call.bind(String.prototype.endsWith);
module.exports = StringPrototypeEndsWith;
