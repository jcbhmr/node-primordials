/** @type {(this: SyntaxError, ...a: Parameters<typeof SyntaxError.prototype.message>) => ReturnType<typeof SyntaxError.prototype.message>} */
const SyntaxErrorPrototypeMessage = Object.call.bind(
  SyntaxError.prototype.message
);
module.exports = SyntaxErrorPrototypeMessage;
