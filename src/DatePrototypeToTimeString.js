/** @type {(this: Date, ...a: Parameters<typeof Date.prototype.toTimeString>) => ReturnType<typeof Date.prototype.toTimeString>} */
const DatePrototypeToTimeString = Object.call.bind(Date.prototype.toTimeString);
module.exports = DatePrototypeToTimeString;
