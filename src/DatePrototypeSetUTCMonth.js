/** @type {(this: Date, ...a: Parameters<typeof Date.prototype.setUTCMonth>) => ReturnType<typeof Date.prototype.setUTCMonth>} */
const DatePrototypeSetUTCMonth = Object.call.bind(Date.prototype.setUTCMonth);
module.exports = DatePrototypeSetUTCMonth;
