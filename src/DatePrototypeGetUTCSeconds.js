/** @type {(this: Date, ...a: Parameters<typeof Date.prototype.getUTCSeconds>) => ReturnType<typeof Date.prototype.getUTCSeconds>} */
const DatePrototypeGetUTCSeconds = Object.call.bind(
  Date.prototype.getUTCSeconds
);
module.exports = DatePrototypeGetUTCSeconds;
