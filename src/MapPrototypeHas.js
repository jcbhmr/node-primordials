/** @type {(that: Map, ...a: Parameters<typeof Map.prototype.has>) => ReturnType<typeof Map.prototype.has>} */
const MapPrototypeHas = Object.call.bind(Map.prototype.has);
module.exports = MapPrototypeHas;
