/** @type {(that: Date, ...a: Parameters<typeof Date.prototype.getUTCFullYear>) => ReturnType<typeof Date.prototype.getUTCFullYear>} */
const DatePrototypeGetUTCFullYear = Object.call.bind(
  Date.prototype.getUTCFullYear
);
module.exports = DatePrototypeGetUTCFullYear;
