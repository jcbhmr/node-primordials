/** @type {(that: Date, ...a: Parameters<typeof Date.prototype.setUTCHours>) => ReturnType<typeof Date.prototype.setUTCHours>} */
const DatePrototypeSetUTCHours = Object.call.bind(Date.prototype.setUTCHours);
module.exports = DatePrototypeSetUTCHours;
