/** @type {(this: Date, ...a: Parameters<typeof Date.prototype.setYear>) => ReturnType<typeof Date.prototype.setYear>} */
const DatePrototypeSetYear = Object.call.bind(Date.prototype.setYear);
module.exports = DatePrototypeSetYear;
