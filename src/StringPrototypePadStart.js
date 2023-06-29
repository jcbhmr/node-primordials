/** @type {(this: String, ...a: Parameters<typeof String.prototype.padStart>) => ReturnType<typeof String.prototype.padStart>} */
const StringPrototypePadStart = Object.call.bind(String.prototype.padStart);
module.exports = StringPrototypePadStart;
