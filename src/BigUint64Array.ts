import { uncurryThis } from "./uncurryThis.js";

export const BigUint64Array = globalThis.BigUint64Array;
export const BigUint64ArrayLength = BigUint64Array.length;
export const BigUint64ArrayName = BigUint64Array.name;
export const BigUint64ArrayPrototype = BigUint64Array.prototype;
export const BigUint64ArrayBYTES_PER_ELEMENT = BigUint64Array.BYTES_PER_ELEMENT;
export const BigUint64ArrayPrototypeConstructor = uncurryThis(
  BigUint64Array.prototype.constructor
);
export const BigUint64ArrayPrototypeBYTES_PER_ELEMENT =
  BigUint64Array.prototype.BYTES_PER_ELEMENT;
