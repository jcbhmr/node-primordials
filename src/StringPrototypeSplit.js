/** @type {(this: String, ...a: Parameters<typeof String.prototype.split>) => ReturnType<typeof String.prototype.split>} */
const StringPrototypeSplit = Object.call.bind(String.prototype.split);
module.exports = StringPrototypeSplit;
