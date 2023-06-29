/** @type {(this: TypeError, ...a: Parameters<typeof TypeError.prototype.name>) => ReturnType<typeof TypeError.prototype.name>} */
const TypeErrorPrototypeName = Object.call.bind(TypeError.prototype.name);
module.exports = TypeErrorPrototypeName;
