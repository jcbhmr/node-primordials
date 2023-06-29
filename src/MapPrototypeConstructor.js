/** @type {(this: Map, ...a: Parameters<typeof Map.prototype.constructor>) => ReturnType<typeof Map.prototype.constructor>} */
const MapPrototypeConstructor = Object.call.bind(Map.prototype.constructor);
module.exports = MapPrototypeConstructor;
