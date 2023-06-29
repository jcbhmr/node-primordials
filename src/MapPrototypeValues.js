/** @type {(that: Map, ...a: Parameters<typeof Map.prototype.values>) => ReturnType<typeof Map.prototype.values>} */
const MapPrototypeValues = Object.call.bind(Map.prototype.values);
module.exports = MapPrototypeValues;
