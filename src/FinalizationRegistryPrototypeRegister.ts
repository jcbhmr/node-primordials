const FinalizationRegistryPrototypeRegister = Function.call.bind(
  FinalizationRegistry.prototype.register
);
export = FinalizationRegistryPrototypeRegister;
