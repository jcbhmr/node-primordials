/** @type {(this: String, ...a: Parameters<typeof String.prototype.anchor>) => ReturnType<typeof String.prototype.anchor>} */
const StringPrototypeAnchor = Object.call.bind(String.prototype.anchor);
module.exports = StringPrototypeAnchor;
