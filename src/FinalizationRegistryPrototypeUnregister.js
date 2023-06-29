/** @type {(that: FinalizationRegistry, ...a: Parameters<typeof FinalizationRegistry.prototype.unregister>) => ReturnType<typeof FinalizationRegistry.prototype.unregister>} */
const FinalizationRegistryPrototypeUnregister = Object.call.bind(
  FinalizationRegistry.prototype.unregister
);
module.exports = FinalizationRegistryPrototypeUnregister;
