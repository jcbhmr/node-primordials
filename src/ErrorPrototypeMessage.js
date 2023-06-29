/** @type {(that: Error, ...a: Parameters<typeof Error.prototype.message>) => ReturnType<typeof Error.prototype.message>} */
const ErrorPrototypeMessage = Object.call.bind(Error.prototype.message);
module.exports = ErrorPrototypeMessage;
