/** @type {(that: Object, ...a: Parameters<typeof Object.prototype.constructor>) => ReturnType<typeof Object.prototype.constructor>} */
const ObjectPrototypeConstructor = Object.call.bind(
  Object.prototype.constructor
);
module.exports = ObjectPrototypeConstructor;
