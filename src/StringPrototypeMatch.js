/** @type {(this: String, ...a: Parameters<typeof String.prototype.match>) => ReturnType<typeof String.prototype.match>} */
const StringPrototypeMatch = Object.call.bind(String.prototype.match);
module.exports = StringPrototypeMatch;
