import { uncurryThis } from "./util.js";

export default Symbol;
export const SymbolLength = Symbol.length;
export const SymbolName = Symbol.name;
export const SymbolPrototype = Symbol.prototype;
export const SymbolFor = Symbol.for;
export const SymbolKeyFor = Symbol.keyFor;
export const SymbolAsyncIterator = Symbol.asyncIterator;
export const SymbolHasInstance = Symbol.hasInstance;
export const SymbolIsConcatSpreadable = Symbol.isConcatSpreadable;
export const SymbolIterator = Symbol.iterator;
export const SymbolMatch = Symbol.match;
export const SymbolMatchAll = Symbol.matchAll;
export const SymbolReplace = Symbol.replace;
export const SymbolSearch = Symbol.search;
export const SymbolSpecies = Symbol.species;
export const SymbolSplit = Symbol.split;
export const SymbolToPrimitive = Symbol.toPrimitive;
export const SymbolToStringTag = Symbol.toStringTag;
export const SymbolUnscopables = Symbol.unscopables;
export const SymbolPrototypeConstructor = Symbol.prototype.constructor;
export const SymbolPrototypeToString = uncurryThis(Symbol.prototype.toString);
export const SymbolPrototypeValueOf = uncurryThis(Symbol.prototype.valueOf);
export const SymbolPrototypeGetDescription = uncurryThis(
  Object.getOwnPropertyDescriptor(Symbol.prototype, "description")!.get!
);
export const SymbolPrototypeSymbolToStringTag =
  Symbol.prototype[Symbol.toStringTag];
export const SymbolPrototypeSymbolToPrimitive = uncurryThis(
  Symbol.prototype[Symbol.toPrimitive]
);
