/** @type {(that: Date, ...a: Parameters<typeof Date.prototype.setHours>) => ReturnType<typeof Date.prototype.setHours>} */
const DatePrototypeSetHours = Object.call.bind(Date.prototype.setHours);
module.exports = DatePrototypeSetHours;
