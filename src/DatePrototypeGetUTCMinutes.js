/** @type {(this: Date, ...a: Parameters<typeof Date.prototype.getUTCMinutes>) => ReturnType<typeof Date.prototype.getUTCMinutes>} */
const DatePrototypeGetUTCMinutes = Object.call.bind(
  Date.prototype.getUTCMinutes
);
module.exports = DatePrototypeGetUTCMinutes;
