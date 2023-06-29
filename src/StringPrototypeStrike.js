/** @type {(that: String, ...a: Parameters<typeof String.prototype.strike>) => ReturnType<typeof String.prototype.strike>} */
const StringPrototypeStrike = Object.call.bind(String.prototype.strike);
module.exports = StringPrototypeStrike;
