import { makeSafe, uncurryThis } from "./util.js";

export default Map;
export const MapLength = Map.length;
export const MapName = Map.name;
export const MapPrototype = Map.prototype;
export const MapGetSymbolSpecies = uncurryThis(
  Object.getOwnPropertyDescriptor(Map, Symbol.species)!.get!
);
export const MapPrototypeConstructor = Map.prototype.constructor;
export const MapPrototypeGet = uncurryThis(Map.prototype.get);
export const MapPrototypeSet = uncurryThis(Map.prototype.set);
export const MapPrototypeHas = uncurryThis(Map.prototype.has);
export const MapPrototypeDelete = uncurryThis(Map.prototype.delete);
export const MapPrototypeClear = uncurryThis(Map.prototype.clear);
export const MapPrototypeEntries = uncurryThis(Map.prototype.entries);
export const MapPrototypeForEach = uncurryThis(Map.prototype.forEach);
export const MapPrototypeKeys = uncurryThis(Map.prototype.keys);
export const MapPrototypeGetSize = uncurryThis(
  Object.getOwnPropertyDescriptor(Map.prototype, "size")!.get!
);
export const MapPrototypeValues = uncurryThis(Map.prototype.values);
export const MapPrototypeSymbolToStringTag = Map.prototype[Symbol.toStringTag];
export const MapPrototypeSymbolIterator = Map.prototype[Symbol.iterator];

export const SafeMap = makeSafe(
  Map,
  class SafeMap extends Map {
    constructor(i: any) {
      // @ts-ignore
      super(i);
    }
  }
);
