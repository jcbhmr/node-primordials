const FinalizationRegistryPrototypeUnregister = Function.call.bind(
  FinalizationRegistry.prototype.unregister
);
export = FinalizationRegistryPrototypeUnregister;
