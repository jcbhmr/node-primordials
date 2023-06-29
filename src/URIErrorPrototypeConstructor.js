/** @type {(that: URIError, ...a: Parameters<typeof URIError.prototype.constructor>) => ReturnType<typeof URIError.prototype.constructor>} */
const URIErrorPrototypeConstructor = Object.call.bind(
  URIError.prototype.constructor
);
module.exports = URIErrorPrototypeConstructor;
