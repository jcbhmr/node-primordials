import { uncurryThis } from "./uncurryThis.js";

export const BigInt64Array = globalThis.BigInt64Array;
export const BigInt64ArrayLength = BigInt64Array.length;
export const BigInt64ArrayName = BigInt64Array.name;
export const BigInt64ArrayPrototype = BigInt64Array.prototype;
export const BigInt64ArrayBYTES_PER_ELEMENT = BigInt64Array.BYTES_PER_ELEMENT;
export const BigInt64ArrayPrototypeConstructor = uncurryThis(
  BigInt64Array.prototype.constructor
);
export const BigInt64ArrayPrototypeBYTES_PER_ELEMENT =
  BigInt64Array.prototype.BYTES_PER_ELEMENT;
