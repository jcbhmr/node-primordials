/** @type {(that: Error, ...a: Parameters<typeof Error.prototype.toString>) => ReturnType<typeof Error.prototype.toString>} */
const ErrorPrototypeToString = Object.call.bind(Error.prototype.toString);
module.exports = ErrorPrototypeToString;
