/** @type {(that: String, ...a: Parameters<typeof String.prototype.includes>) => ReturnType<typeof String.prototype.includes>} */
const StringPrototypeIncludes = Object.call.bind(String.prototype.includes);
module.exports = StringPrototypeIncludes;
