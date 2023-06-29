/** @type {(that: Map, ...a: Parameters<typeof Map.prototype.forEach>) => ReturnType<typeof Map.prototype.forEach>} */
const MapPrototypeForEach = Object.call.bind(Map.prototype.forEach);
module.exports = MapPrototypeForEach;
