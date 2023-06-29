/** @type {(that: String, ...a: Parameters<typeof String.prototype.normalize>) => ReturnType<typeof String.prototype.normalize>} */
const StringPrototypeNormalize = Object.call.bind(String.prototype.normalize);
module.exports = StringPrototypeNormalize;
