/** @type {(that: String, ...a: Parameters<typeof String.prototype.substring>) => ReturnType<typeof String.prototype.substring>} */
const StringPrototypeSubstring = Object.call.bind(String.prototype.substring);
module.exports = StringPrototypeSubstring;
