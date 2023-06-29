/** @type {(this: String, ...a: Parameters<typeof String.prototype.big>) => ReturnType<typeof String.prototype.big>} */
const StringPrototypeBig = Object.call.bind(String.prototype.big);
module.exports = StringPrototypeBig;
