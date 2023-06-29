/** @type {(this: Date, ...a: Parameters<typeof Date.prototype.setDate>) => ReturnType<typeof Date.prototype.setDate>} */
const DatePrototypeSetDate = Object.call.bind(Date.prototype.setDate);
module.exports = DatePrototypeSetDate;
