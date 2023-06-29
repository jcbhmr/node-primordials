/** @type {(this: Map, ...a: Parameters<typeof Map.prototype.entries>) => ReturnType<typeof Map.prototype.entries>} */
const MapPrototypeEntries = Object.call.bind(Map.prototype.entries);
module.exports = MapPrototypeEntries;
