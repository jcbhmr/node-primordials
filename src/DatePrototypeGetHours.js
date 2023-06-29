/** @type {(that: Date, ...a: Parameters<typeof Date.prototype.getHours>) => ReturnType<typeof Date.prototype.getHours>} */
const DatePrototypeGetHours = Object.call.bind(Date.prototype.getHours);
module.exports = DatePrototypeGetHours;
