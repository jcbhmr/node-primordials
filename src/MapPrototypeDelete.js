/** @type {(that: Map, ...a: Parameters<typeof Map.prototype.delete>) => ReturnType<typeof Map.prototype.delete>} */
const MapPrototypeDelete = Object.call.bind(Map.prototype.delete);
module.exports = MapPrototypeDelete;
