/** @type {(this: Date, ...a: Parameters<typeof Date.prototype.toString>) => ReturnType<typeof Date.prototype.toString>} */
const DatePrototypeToString = Object.call.bind(Date.prototype.toString);
module.exports = DatePrototypeToString;
