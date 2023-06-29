/** @type {(that: Date, ...a: Parameters<typeof Date.prototype.setFullYear>) => ReturnType<typeof Date.prototype.setFullYear>} */
const DatePrototypeSetFullYear = Object.call.bind(Date.prototype.setFullYear);
module.exports = DatePrototypeSetFullYear;
