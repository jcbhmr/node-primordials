/** @type {(this: Set) => typeof Set.prototype.size} */
const SetPrototypeGetSize = Object.call.bind(
  Object.getOwnPropertyDescriptor(Set.prototype, "size").get
);
module.exports = SetPrototypeGetSize;
