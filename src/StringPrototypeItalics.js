/** @type {(this: String, ...a: Parameters<typeof String.prototype.italics>) => ReturnType<typeof String.prototype.italics>} */
const StringPrototypeItalics = Object.call.bind(String.prototype.italics);
module.exports = StringPrototypeItalics;
