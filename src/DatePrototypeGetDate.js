/** @type {(this: Date, ...a: Parameters<typeof Date.prototype.getDate>) => ReturnType<typeof Date.prototype.getDate>} */
const DatePrototypeGetDate = Object.call.bind(Date.prototype.getDate);
module.exports = DatePrototypeGetDate;
