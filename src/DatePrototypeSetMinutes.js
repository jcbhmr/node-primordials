/** @type {(this: Date, ...a: Parameters<typeof Date.prototype.setMinutes>) => ReturnType<typeof Date.prototype.setMinutes>} */
const DatePrototypeSetMinutes = Object.call.bind(Date.prototype.setMinutes);
module.exports = DatePrototypeSetMinutes;
