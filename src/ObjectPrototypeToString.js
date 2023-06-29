/** @type {(this: Object, ...a: Parameters<typeof Object.prototype.toString>) => ReturnType<typeof Object.prototype.toString>} */
const ObjectPrototypeToString = Object.call.bind(Object.prototype.toString);
module.exports = ObjectPrototypeToString;
