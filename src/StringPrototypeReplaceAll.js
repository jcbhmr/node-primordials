/** @type {(this: String, ...a: Parameters<typeof String.prototype.replaceAll>) => ReturnType<typeof String.prototype.replaceAll>} */
const StringPrototypeReplaceAll = Object.call.bind(String.prototype.replaceAll);
module.exports = StringPrototypeReplaceAll;
