/** @type {(that: Date, ...a: Parameters<typeof Date.prototype.getTime>) => ReturnType<typeof Date.prototype.getTime>} */
const DatePrototypeGetTime = Object.call.bind(Date.prototype.getTime);
module.exports = DatePrototypeGetTime;
