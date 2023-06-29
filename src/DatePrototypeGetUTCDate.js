/** @type {(that: Date, ...a: Parameters<typeof Date.prototype.getUTCDate>) => ReturnType<typeof Date.prototype.getUTCDate>} */
const DatePrototypeGetUTCDate = Object.call.bind(Date.prototype.getUTCDate);
module.exports = DatePrototypeGetUTCDate;
