/** @type {(this: String, ...a: Parameters<typeof String.prototype.bold>) => ReturnType<typeof String.prototype.bold>} */
const StringPrototypeBold = Object.call.bind(String.prototype.bold);
module.exports = StringPrototypeBold;
