/** @type {(this: Date, ...a: Parameters<typeof Date.prototype.getUTCMilliseconds>) => ReturnType<typeof Date.prototype.getUTCMilliseconds>} */
const DatePrototypeGetUTCMilliseconds = Object.call.bind(
  Date.prototype.getUTCMilliseconds
);
module.exports = DatePrototypeGetUTCMilliseconds;
