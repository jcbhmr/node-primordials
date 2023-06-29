/** @type {(that: Date, ...a: Parameters<typeof Date.prototype.setUTCSeconds>) => ReturnType<typeof Date.prototype.setUTCSeconds>} */
const DatePrototypeSetUTCSeconds = Object.call.bind(
  Date.prototype.setUTCSeconds
);
module.exports = DatePrototypeSetUTCSeconds;
