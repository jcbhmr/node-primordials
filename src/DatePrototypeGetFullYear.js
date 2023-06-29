/** @type {(this: Date, ...a: Parameters<typeof Date.prototype.getFullYear>) => ReturnType<typeof Date.prototype.getFullYear>} */
const DatePrototypeGetFullYear = Object.call.bind(Date.prototype.getFullYear);
module.exports = DatePrototypeGetFullYear;
