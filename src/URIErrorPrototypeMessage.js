/** @type {(that: URIError, ...a: Parameters<typeof URIError.prototype.message>) => ReturnType<typeof URIError.prototype.message>} */
const URIErrorPrototypeMessage = Object.call.bind(URIError.prototype.message);
module.exports = URIErrorPrototypeMessage;
