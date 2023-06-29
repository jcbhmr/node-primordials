/** @type {(this: Date, ...a: Parameters<typeof Date.prototype.setUTCDate>) => ReturnType<typeof Date.prototype.setUTCDate>} */
const DatePrototypeSetUTCDate = Object.call.bind(Date.prototype.setUTCDate);
module.exports = DatePrototypeSetUTCDate;
