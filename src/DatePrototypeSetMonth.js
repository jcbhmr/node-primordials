/** @type {(this: Date, ...a: Parameters<typeof Date.prototype.setMonth>) => ReturnType<typeof Date.prototype.setMonth>} */
const DatePrototypeSetMonth = Object.call.bind(Date.prototype.setMonth);
module.exports = DatePrototypeSetMonth;
