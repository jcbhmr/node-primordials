/** @type {(this: String, ...a: Parameters<typeof String.prototype.link>) => ReturnType<typeof String.prototype.link>} */
const StringPrototypeLink = Object.call.bind(String.prototype.link);
module.exports = StringPrototypeLink;
