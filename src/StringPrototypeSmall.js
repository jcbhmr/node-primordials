/** @type {(this: String, ...a: Parameters<typeof String.prototype.small>) => ReturnType<typeof String.prototype.small>} */
const StringPrototypeSmall = Object.call.bind(String.prototype.small);
module.exports = StringPrototypeSmall;
