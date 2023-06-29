/** @type {(that: Map, ...a: Parameters<typeof Map.prototype.get>) => ReturnType<typeof Map.prototype.get>} */
const MapPrototypeGet = Object.call.bind(Map.prototype.get);
module.exports = MapPrototypeGet;
