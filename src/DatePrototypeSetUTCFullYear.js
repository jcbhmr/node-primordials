/** @type {(this: Date, ...a: Parameters<typeof Date.prototype.setUTCFullYear>) => ReturnType<typeof Date.prototype.setUTCFullYear>} */
const DatePrototypeSetUTCFullYear = Object.call.bind(
  Date.prototype.setUTCFullYear
);
module.exports = DatePrototypeSetUTCFullYear;
