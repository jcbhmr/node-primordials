/** @type {(this: String, ...a: Parameters<typeof String.prototype.padEnd>) => ReturnType<typeof String.prototype.padEnd>} */
const StringPrototypePadEnd = Object.call.bind(String.prototype.padEnd);
module.exports = StringPrototypePadEnd;
