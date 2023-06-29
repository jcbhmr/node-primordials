/** @type {(this: Object, ...a: Parameters<typeof Object.prototype.hasOwnProperty>) => ReturnType<typeof Object.prototype.hasOwnProperty>} */
const ObjectPrototypeHasOwnProperty = Object.call.bind(
  Object.prototype.hasOwnProperty
);
module.exports = ObjectPrototypeHasOwnProperty;
