/** @type {(this: String, ...a: Parameters<typeof String.prototype.charCodeAt>) => ReturnType<typeof String.prototype.charCodeAt>} */
const StringPrototypeCharCodeAt = Object.call.bind(String.prototype.charCodeAt);
module.exports = StringPrototypeCharCodeAt;
