import { uncurryThis } from "./util.js";

export default Object;
export const ObjectLength = Object.length;
export const ObjectName = Object.name;
export const ObjectPrototype = Object.prototype;
export const ObjectAssign = Object.assign;
export const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
export const ObjectGetOwnPropertyDescriptors = Object.getOwnPropertyDescriptors;
export const ObjectGetOwnPropertyNames = Object.getOwnPropertyNames;
export const ObjectGetOwnPropertySymbols = Object.getOwnPropertySymbols;
export const ObjectHasOwn = Object.prototype.hasOwnProperty;
export const ObjectIs = Object.is;
export const ObjectPreventExtensions = Object.preventExtensions;
export const ObjectSeal = Object.seal;
export const ObjectCreate = Object.create;
export const ObjectDefineProperties = Object.defineProperties;
export const ObjectDefineProperty = Object.defineProperty;
export const ObjectFreeze = Object.freeze;
export const ObjectGetPrototypeOf = Object.getPrototypeOf;
export const ObjectSetPrototypeOf = Object.setPrototypeOf;
export const ObjectIsExtensible = Object.isExtensible;
export const ObjectIsFrozen = Object.isFrozen;
export const ObjectIsSealed = Object.isSealed;
export const ObjectKeys = Object.keys;
export const ObjectEntries = Object.entries;
export const ObjectFromEntries = Object.fromEntries;
export const ObjectValues = Object.values;
export const ObjectPrototypeConstructor = Object.prototype.constructor;
export const ObjectPrototype__defineGetter__ = uncurryThis(
  // @ts-ignore
  Object.prototype.__defineGetter__
);
export const ObjectPrototype__defineSetter__ = uncurryThis(
  // @ts-ignore
  Object.prototype.__defineSetter__
);
export const ObjectPrototypeHasOwnProperty = uncurryThis(
  Object.prototype.hasOwnProperty
);
export const ObjectPrototype__lookupGetter__ = uncurryThis(
  // @ts-ignore
  Object.prototype.__lookupGetter__
);
export const ObjectPrototype__lookupSetter__ = uncurryThis(
  // @ts-ignore
  Object.prototype.__lookupSetter__
);
export const ObjectPrototypeIsPrototypeOf = uncurryThis(
  Object.prototype.isPrototypeOf
);
export const ObjectPrototypePropertyIsEnumerable = uncurryThis(
  Object.prototype.propertyIsEnumerable
);
export const ObjectPrototypeToString = uncurryThis(Object.prototype.toString);
export const ObjectPrototypeValueOf = uncurryThis(Object.prototype.valueOf);
export const ObjectPrototypeGet__proto__ = uncurryThis(
  Object.getOwnPropertyDescriptor(Object.prototype, "__proto__")!.get!
);
export const ObjectPrototypeSet__proto__ = uncurryThis(
  Object.getOwnPropertyDescriptor(Object.prototype, "__proto__")!.set!
);
export const ObjectPrototypeToLocaleString = uncurryThis(
  Object.prototype.toLocaleString
);
