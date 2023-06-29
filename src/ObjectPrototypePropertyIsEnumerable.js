/** @type {(this: Object, ...a: Parameters<typeof Object.prototype.propertyIsEnumerable>) => ReturnType<typeof Object.prototype.propertyIsEnumerable>} */
const ObjectPrototypePropertyIsEnumerable = Object.call.bind(
  Object.prototype.propertyIsEnumerable
);
module.exports = ObjectPrototypePropertyIsEnumerable;
