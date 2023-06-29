/** @type {(that: Date, ...a: Parameters<typeof Date.prototype.constructor>) => ReturnType<typeof Date.prototype.constructor>} */
const DatePrototypeConstructor = Object.call.bind(Date.prototype.constructor);
module.exports = DatePrototypeConstructor;
