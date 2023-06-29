/** @type {(this: Date, ...a: Parameters<typeof Date.prototype.getYear>) => ReturnType<typeof Date.prototype.getYear>} */
const DatePrototypeGetYear = Object.call.bind(Date.prototype.getYear);
module.exports = DatePrototypeGetYear;
