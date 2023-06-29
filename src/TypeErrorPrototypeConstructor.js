/** @type {(this: TypeError, ...a: Parameters<typeof TypeError.prototype.constructor>) => ReturnType<typeof TypeError.prototype.constructor>} */
const TypeErrorPrototypeConstructor = Object.call.bind(
  TypeError.prototype.constructor
);
module.exports = TypeErrorPrototypeConstructor;
