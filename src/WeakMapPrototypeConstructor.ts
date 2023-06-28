const WeakMapPrototypeConstructor = Function.call.bind(
  WeakMap.prototype.constructor
);
export = WeakMapPrototypeConstructor;
