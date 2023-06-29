/** @type {(this: String, ...a: Parameters<typeof String.prototype.search>) => ReturnType<typeof String.prototype.search>} */
const StringPrototypeSearch = Object.call.bind(String.prototype.search);
module.exports = StringPrototypeSearch;
