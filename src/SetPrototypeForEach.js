/** @type {(that: Set, ...a: Parameters<typeof Set.prototype.forEach>) => ReturnType<typeof Set.prototype.forEach>} */
const SetPrototypeForEach = Object.call.bind(Set.prototype.forEach);
module.exports = SetPrototypeForEach;
