import TypedArray from "./TypedArray.js";
import uncurryThis from "./uncurryThis.js";

const { get } = Object.getOwnPropertyDescriptor(TypedArray, Symbol.species);
const TypedArrayGetSymbolSpecies = uncurryThis(get);
export = TypedArrayGetSymbolSpecies;
