/** @type {(that: String, ...a: Parameters<typeof String.prototype.sup>) => ReturnType<typeof String.prototype.sup>} */
const StringPrototypeSup = Object.call.bind(String.prototype.sup);
module.exports = StringPrototypeSup;
