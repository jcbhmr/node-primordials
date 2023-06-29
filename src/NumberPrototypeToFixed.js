/** @type {(that: Number, ...a: Parameters<typeof Number.prototype.toFixed>) => ReturnType<typeof Number.prototype.toFixed>} */
const NumberPrototypeToFixed = Object.call.bind(Number.prototype.toFixed);
module.exports = NumberPrototypeToFixed;
