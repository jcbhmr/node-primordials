/** @type {(this: Map, ...a: Parameters<typeof Map.prototype.set>) => ReturnType<typeof Map.prototype.set>} */
const MapPrototypeSet = Object.call.bind(Map.prototype.set);
module.exports = MapPrototypeSet;
