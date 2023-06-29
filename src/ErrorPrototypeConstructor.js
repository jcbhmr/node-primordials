/** @type {(that: Error, ...a: Parameters<typeof Error.prototype.constructor>) => ReturnType<typeof Error.prototype.constructor>} */
const ErrorPrototypeConstructor = Object.call.bind(Error.prototype.constructor);
module.exports = ErrorPrototypeConstructor;
