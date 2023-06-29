/** @type {(this: String, ...a: Parameters<typeof String.prototype.length>) => ReturnType<typeof String.prototype.length>} */
const StringPrototypeLength = Object.call.bind(String.prototype.length);
module.exports = StringPrototypeLength;
