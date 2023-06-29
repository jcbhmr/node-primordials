/** @type {(that: Date, ...a: Parameters<typeof Date.prototype.toJSON>) => ReturnType<typeof Date.prototype.toJSON>} */
const DatePrototypeToJSON = Object.call.bind(Date.prototype.toJSON);
module.exports = DatePrototypeToJSON;
