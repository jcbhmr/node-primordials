const AsyncIteratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf(async function* () {}).prototype
);
export = AsyncIteratorPrototype;
