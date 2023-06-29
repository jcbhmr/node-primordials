/** @type {(that: Number, ...a: Parameters<typeof Number.prototype.toString>) => ReturnType<typeof Number.prototype.toString>} */
const NumberPrototypeToString = Object.call.bind(Number.prototype.toString);
module.exports = NumberPrototypeToString;
