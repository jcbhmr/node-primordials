/** @type {(that: Object, ...a: Parameters<typeof Object.prototype.toLocaleString>) => ReturnType<typeof Object.prototype.toLocaleString>} */
const ObjectPrototypeToLocaleString = Object.call.bind(
  Object.prototype.toLocaleString
);
module.exports = ObjectPrototypeToLocaleString;
