/** @type {(that: any, ...a: ConstructorParameters<typeof Array>) => Array} */
const ArrayPrototypeConstructor = Object.call.bind(Array.prototype.constructor);
module.exports = ArrayPrototypeConstructor;
