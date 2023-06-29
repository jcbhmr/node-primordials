/** @type {(that: Date, ...a: Parameters<typeof Date.prototype.setUTCMinutes>) => ReturnType<typeof Date.prototype.setUTCMinutes>} */
const DatePrototypeSetUTCMinutes = Object.call.bind(
  Date.prototype.setUTCMinutes
);
module.exports = DatePrototypeSetUTCMinutes;
