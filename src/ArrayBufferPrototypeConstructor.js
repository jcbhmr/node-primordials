/**
 * @type {(
 *   that: any,
 *   ...a: ConstructorParameters<typeof ArrayBuffer>
 * ) => ArrayBuffer}
 */
const ArrayBufferPrototypeConstructor = Object.call.bind(
  ArrayBuffer.prototype.constructor
);
module.exports = ArrayBufferPrototypeConstructor;
