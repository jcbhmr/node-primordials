/** @type {(that: String, ...a: Parameters<typeof String.prototype.blink>) => ReturnType<typeof String.prototype.blink>} */
const StringPrototypeBlink = Object.call.bind(String.prototype.blink);
module.exports = StringPrototypeBlink;
