/** @type {(that: Map) => typeof Map.prototype.size} */
const MapPrototypeGetSize = Object.call.bind(
  Object.getOwnPropertyDescriptor(Map.prototype, "size").get
);
module.exports = MapPrototypeGetSize;
