/** @type {(that: Date, ...a: Parameters<typeof Date.prototype.getDay>) => ReturnType<typeof Date.prototype.getDay>} */
const DatePrototypeGetDay = Object.call.bind(Date.prototype.getDay);
module.exports = DatePrototypeGetDay;
