/** @type {(this: String, ...a: Parameters<typeof String.prototype.concat>) => ReturnType<typeof String.prototype.concat>} */
const StringPrototypeConcat = Object.call.bind(String.prototype.concat);
module.exports = StringPrototypeConcat;
