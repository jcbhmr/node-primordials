/** @type {(that: TypeError, ...a: Parameters<typeof TypeError.prototype.message>) => ReturnType<typeof TypeError.prototype.message>} */
const TypeErrorPrototypeMessage = Object.call.bind(TypeError.prototype.message);
module.exports = TypeErrorPrototypeMessage;
