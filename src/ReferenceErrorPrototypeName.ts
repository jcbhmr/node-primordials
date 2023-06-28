const ReferenceErrorPrototypeName = Function.call.bind(
  ReferenceError.prototype.name
);
export = ReferenceErrorPrototypeName;
