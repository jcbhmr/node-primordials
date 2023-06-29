/** @type {(that: Date, ...a: Parameters<typeof Date.prototype.setSeconds>) => ReturnType<typeof Date.prototype.setSeconds>} */
const DatePrototypeSetSeconds = Object.call.bind(Date.prototype.setSeconds);
module.exports = DatePrototypeSetSeconds;
