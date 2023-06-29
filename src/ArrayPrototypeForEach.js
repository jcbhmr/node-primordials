/** @type {(this: Array, ...a: Parameters<typeof Array.prototype.forEach>) => ReturnType<typeof Array.prototype.forEach>} */
const ArrayPrototypeForEach = Object.call.bind(Array.prototype.forEach);
module.exports = ArrayPrototypeForEach;
