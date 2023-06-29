/** @type {(that: Object, ...a: Parameters<typeof Object.prototype.isPrototypeOf>) => ReturnType<typeof Object.prototype.isPrototypeOf>} */
const ObjectPrototypeIsPrototypeOf = Object.call.bind(
  Object.prototype.isPrototypeOf
);
module.exports = ObjectPrototypeIsPrototypeOf;
