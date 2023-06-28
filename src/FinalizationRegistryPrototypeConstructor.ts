
      const FinalizationRegistryPrototypeConstructor = Function.call.bind(
        FinalizationRegistry.prototype.constructor
      );
      export = FinalizationRegistryPrototypeConstructor;
    