/** @type {(this: String, ...a: Parameters<typeof String.prototype.repeat>) => ReturnType<typeof String.prototype.repeat>} */
const StringPrototypeRepeat = Object.call.bind(String.prototype.repeat);
module.exports = StringPrototypeRepeat;
