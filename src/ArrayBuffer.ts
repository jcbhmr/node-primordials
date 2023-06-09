import uncurryThis from "./uncurryThis.js";

export default ArrayBuffer;
export const ArrayBufferLength = ArrayBuffer.length;
export const ArrayBufferName = ArrayBuffer.name;
export const ArrayBufferPrototype = ArrayBuffer.prototype;
export const ArrayBufferIsView = ArrayBuffer.isView;
export const ArrayBufferGetSymbolSpecies = uncurryThis(
  Object.getOwnPropertyDescriptor(ArrayBuffer, Symbol.species)!.get!
);
export const ArrayBufferPrototypeConstructor =
  ArrayBuffer.prototype.constructor;
export const ArrayBufferPrototypeGetByteLength = uncurryThis(
  Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength")!.get!
);
export const ArrayBufferPrototypeSlice = uncurryThis(
  ArrayBuffer.prototype.slice
);
export const ArrayBufferPrototypeSymbolToStringTag =
  ArrayBuffer.prototype[Symbol.toStringTag];
