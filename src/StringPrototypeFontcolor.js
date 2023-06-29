/** @type {(this: String, ...a: Parameters<typeof String.prototype.fontcolor>) => ReturnType<typeof String.prototype.fontcolor>} */
const StringPrototypeFontcolor = Object.call.bind(String.prototype.fontcolor);
module.exports = StringPrototypeFontcolor;
