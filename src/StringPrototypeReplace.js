/** @type {(this: String, ...a: Parameters<typeof String.prototype.replace>) => ReturnType<typeof String.prototype.replace>} */
const StringPrototypeReplace = Object.call.bind(String.prototype.replace);
module.exports = StringPrototypeReplace;
