/** @type {(that: Date, ...a: Parameters<typeof Date.prototype.getMinutes>) => ReturnType<typeof Date.prototype.getMinutes>} */
const DatePrototypeGetMinutes = Object.call.bind(Date.prototype.getMinutes);
module.exports = DatePrototypeGetMinutes;
