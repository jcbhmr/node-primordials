/** @type {(that: Date, ...a: Parameters<typeof Date.prototype.getSeconds>) => ReturnType<typeof Date.prototype.getSeconds>} */
const DatePrototypeGetSeconds = Object.call.bind(Date.prototype.getSeconds);
module.exports = DatePrototypeGetSeconds;
