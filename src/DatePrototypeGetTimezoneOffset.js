/** @type {(this: Date, ...a: Parameters<typeof Date.prototype.getTimezoneOffset>) => ReturnType<typeof Date.prototype.getTimezoneOffset>} */
const DatePrototypeGetTimezoneOffset = Object.call.bind(
  Date.prototype.getTimezoneOffset
);
module.exports = DatePrototypeGetTimezoneOffset;
