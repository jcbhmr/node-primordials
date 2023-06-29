/** @type {(that: String, ...a: Parameters<typeof String.prototype.slice>) => ReturnType<typeof String.prototype.slice>} */
const StringPrototypeSlice = Object.call.bind(String.prototype.slice);
module.exports = StringPrototypeSlice;
