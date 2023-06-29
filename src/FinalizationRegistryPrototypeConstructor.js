/** @type {(this: FinalizationRegistry, ...a: Parameters<typeof FinalizationRegistry.prototype.constructor>) => ReturnType<typeof FinalizationRegistry.prototype.constructor>} */
const FinalizationRegistryPrototypeConstructor = Object.call.bind(
  FinalizationRegistry.prototype.constructor
);
module.exports = FinalizationRegistryPrototypeConstructor;
