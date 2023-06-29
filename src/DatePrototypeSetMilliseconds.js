/** @type {(this: Date, ...a: Parameters<typeof Date.prototype.setMilliseconds>) => ReturnType<typeof Date.prototype.setMilliseconds>} */
const DatePrototypeSetMilliseconds = Object.call.bind(
  Date.prototype.setMilliseconds
);
module.exports = DatePrototypeSetMilliseconds;
