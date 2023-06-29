/** @type {(this: Date, ...a: Parameters<typeof Date.prototype.setTime>) => ReturnType<typeof Date.prototype.setTime>} */
const DatePrototypeSetTime = Object.call.bind(Date.prototype.setTime);
module.exports = DatePrototypeSetTime;
