/** @type {(this: URIError, ...a: Parameters<typeof URIError.prototype.name>) => ReturnType<typeof URIError.prototype.name>} */
const URIErrorPrototypeName = Object.call.bind(URIError.prototype.name);
module.exports = URIErrorPrototypeName;
