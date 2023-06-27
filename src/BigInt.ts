import { uncurryThis } from "./uncurryThis.js";

export const BigInt = globalThis.BigInt;
export const BigIntLength = BigInt.length;
export const BigIntName = BigInt.name;
export const BigIntPrototype = BigInt.prototype;
export const BigIntAsUintN = BigInt.asUintN;
export const BigIntAsIntN = BigInt.asIntN;
export const BigIntPrototypeConstructor = uncurryThis(
  BigInt.prototype.constructor
);
export const BigIntPrototypeToLocaleString = uncurryThis(
  BigInt.prototype.toLocaleString
);
export const BigIntPrototypeToString = uncurryThis(BigInt.prototype.toString);
export const BigIntPrototypeValueOf = uncurryThis(BigInt.prototype.valueOf);
export const BigIntPrototypeSymbolToStringTag =
  BigInt.prototype[Symbol.toStringTag];
