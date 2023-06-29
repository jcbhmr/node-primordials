/** @type {(that: Date, ...a: Parameters<typeof Date.prototype.getMilliseconds>) => ReturnType<typeof Date.prototype.getMilliseconds>} */
const DatePrototypeGetMilliseconds = Object.call.bind(
  Date.prototype.getMilliseconds
);
module.exports = DatePrototypeGetMilliseconds;
