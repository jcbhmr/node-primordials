/** @type {(that: Date, ...a: Parameters<typeof Date.prototype.setUTCMilliseconds>) => ReturnType<typeof Date.prototype.setUTCMilliseconds>} */
const DatePrototypeSetUTCMilliseconds = Object.call.bind(
  Date.prototype.setUTCMilliseconds
);
module.exports = DatePrototypeSetUTCMilliseconds;
