const ObjectPrototypePropertyIsEnumerable = Function.call.bind(
  Object.prototype.propertyIsEnumerable
);
export = ObjectPrototypePropertyIsEnumerable;
