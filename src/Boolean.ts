import { uncurryThis } from "./uncurryThis.js";

export const Boolean = globalThis.Boolean;
export const BooleanLength = Boolean.length;
export const BooleanName = Boolean.name;
export const BooleanPrototype = Boolean.prototype;
export const BooleanPrototypeConstructor = uncurryThis(
  Boolean.prototype.constructor
);
export const BooleanPrototypeToString = uncurryThis(Boolean.prototype.toString);
export const BooleanPrototypeValueOf = uncurryThis(Boolean.prototype.valueOf);
