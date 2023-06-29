/** @type {(this: FinalizationRegistry, ...a: Parameters<typeof FinalizationRegistry.prototype.register>) => ReturnType<typeof FinalizationRegistry.prototype.register>} */
const FinalizationRegistryPrototypeRegister = Object.call.bind(
  FinalizationRegistry.prototype.register
);
module.exports = FinalizationRegistryPrototypeRegister;
