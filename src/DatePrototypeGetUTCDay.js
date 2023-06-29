/** @type {(this: Date, ...a: Parameters<typeof Date.prototype.getUTCDay>) => ReturnType<typeof Date.prototype.getUTCDay>} */
const DatePrototypeGetUTCDay = Object.call.bind(Date.prototype.getUTCDay);
module.exports = DatePrototypeGetUTCDay;
