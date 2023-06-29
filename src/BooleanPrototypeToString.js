/** @type {(this: Boolean, ...a: Parameters<typeof Boolean.prototype.toString>) => ReturnType<typeof Boolean.prototype.toString>} */
const BooleanPrototypeToString = Object.call.bind(Boolean.prototype.toString);
module.exports = BooleanPrototypeToString;
