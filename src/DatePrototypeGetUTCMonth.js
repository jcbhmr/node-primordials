/** @type {(that: Date, ...a: Parameters<typeof Date.prototype.getUTCMonth>) => ReturnType<typeof Date.prototype.getUTCMonth>} */
const DatePrototypeGetUTCMonth = Object.call.bind(Date.prototype.getUTCMonth);
module.exports = DatePrototypeGetUTCMonth;
