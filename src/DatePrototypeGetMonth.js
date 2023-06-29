/** @type {(this: Date, ...a: Parameters<typeof Date.prototype.getMonth>) => ReturnType<typeof Date.prototype.getMonth>} */
const DatePrototypeGetMonth = Object.call.bind(Date.prototype.getMonth);
module.exports = DatePrototypeGetMonth;
