import { applyBind, uncurryThis } from "./util.js";

export default Array;
export const ArrayLength = Array.length;
export const ArrayName = Array.name;
export const ArrayPrototype = Array.prototype;
export const ArrayIsArray = Array.isArray;
export const ArrayFrom = Array.from;
export const ArrayOf = Array.of;
export const ArrayOfApply = applyBind(Array.of, Array);
export const ArrayGetSymbolSpecies = uncurryThis(
  Object.getOwnPropertyDescriptor(Array, Symbol.species)!.get!
);
export const ArrayPrototypeLength = Array.prototype.length;
export const ArrayPrototypeConstructor = Array.prototype.constructor;
export const ArrayPrototypeAt = uncurryThis(Array.prototype.at);
export const ArrayPrototypeConcat = uncurryThis(Array.prototype.concat);
export const ArrayPrototypeCopyWithin = uncurryThis(Array.prototype.copyWithin);
export const ArrayPrototypeFill = uncurryThis(Array.prototype.fill);
export const ArrayPrototypeFind = uncurryThis(Array.prototype.find);
export const ArrayPrototypeFindIndex = uncurryThis(Array.prototype.findIndex);
export const ArrayPrototypeLastIndexOf = uncurryThis(
  Array.prototype.lastIndexOf
);
export const ArrayPrototypePop = uncurryThis(Array.prototype.pop);
export const ArrayPrototypePush = uncurryThis(Array.prototype.push);
export const ArrayPrototypePushApply = applyBind(
  Array.prototype.push,
  Array.prototype
);
export const ArrayPrototypeReverse = uncurryThis(Array.prototype.reverse);
export const ArrayPrototypeShift = uncurryThis(Array.prototype.shift);
export const ArrayPrototypeUnshift = uncurryThis(Array.prototype.unshift);
export const ArrayPrototypeUnshiftApply = applyBind(
  Array.prototype.unshift,
  Array.prototype
);
export const ArrayPrototypeSlice = uncurryThis(Array.prototype.slice);
export const ArrayPrototypeSort = uncurryThis(Array.prototype.sort);
export const ArrayPrototypeSplice = uncurryThis(Array.prototype.splice);
export const ArrayPrototypeIncludes = uncurryThis(Array.prototype.includes);
export const ArrayPrototypeIndexOf = uncurryThis(Array.prototype.indexOf);
export const ArrayPrototypeJoin = uncurryThis(Array.prototype.join);
export const ArrayPrototypeKeys = uncurryThis(Array.prototype.keys);
export const ArrayPrototypeEntries = uncurryThis(Array.prototype.entries);
export const ArrayPrototypeValues = uncurryThis(Array.prototype.values);
export const ArrayPrototypeForEach = uncurryThis(Array.prototype.forEach);
export const ArrayPrototypeFilter = uncurryThis(Array.prototype.filter);
export const ArrayPrototypeFlat = uncurryThis(Array.prototype.flat);
export const ArrayPrototypeFlatMap = uncurryThis(Array.prototype.flatMap);
export const ArrayPrototypeMap = uncurryThis(Array.prototype.map);
export const ArrayPrototypeEvery = uncurryThis(Array.prototype.every);
export const ArrayPrototypeSome = uncurryThis(Array.prototype.some);
export const ArrayPrototypeReduce = uncurryThis(Array.prototype.reduce);
export const ArrayPrototypeReduceRight = uncurryThis(
  Array.prototype.reduceRight
);
export const ArrayPrototypeToLocaleString = uncurryThis(
  Array.prototype.toLocaleString
);
export const ArrayPrototypeToString = uncurryThis(Array.prototype.toString);
export const ArrayPrototypeSymbolIterator = uncurryThis(
  Array.prototype[Symbol.iterator]
);
export const ArrayPrototypeSymbolUnscopables =
  Array.prototype[Symbol.unscopables];
