/** @type {(this: String, ...a: Parameters<typeof String.prototype.sub>) => ReturnType<typeof String.prototype.sub>} */
const StringPrototypeSub = Object.call.bind(String.prototype.sub);
module.exports = StringPrototypeSub;
