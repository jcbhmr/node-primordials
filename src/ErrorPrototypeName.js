/** @type {(this: Error, ...a: Parameters<typeof Error.prototype.name>) => ReturnType<typeof Error.prototype.name>} */
const ErrorPrototypeName = Object.call.bind(Error.prototype.name);
module.exports = ErrorPrototypeName;
