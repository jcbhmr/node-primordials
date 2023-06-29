/** @type {(that: Date, ...a: Parameters<typeof Date.prototype.getUTCHours>) => ReturnType<typeof Date.prototype.getUTCHours>} */
const DatePrototypeGetUTCHours = Object.call.bind(Date.prototype.getUTCHours);
module.exports = DatePrototypeGetUTCHours;
