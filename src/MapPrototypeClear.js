/** @type {(this: Map, ...a: Parameters<typeof Map.prototype.clear>) => ReturnType<typeof Map.prototype.clear>} */
const MapPrototypeClear = Object.call.bind(Map.prototype.clear);
module.exports = MapPrototypeClear;
