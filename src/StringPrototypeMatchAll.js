/** @type {(that: String, ...a: Parameters<typeof String.prototype.matchAll>) => ReturnType<typeof String.prototype.matchAll>} */
const StringPrototypeMatchAll = Object.call.bind(String.prototype.matchAll);
module.exports = StringPrototypeMatchAll;
