/** @type {(this: Map, ...a: Parameters<typeof Map.prototype.keys>) => ReturnType<typeof Map.prototype.keys>} */
const MapPrototypeKeys = Object.call.bind(Map.prototype.keys);
module.exports = MapPrototypeKeys;
