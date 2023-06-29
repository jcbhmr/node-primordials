/** @type {(this: String, ...a: Parameters<typeof String.prototype.trimRight>) => ReturnType<typeof String.prototype.trimRight>} */
const StringPrototypeTrimRight = Object.call.bind(String.prototype.trimRight);
module.exports = StringPrototypeTrimRight;
