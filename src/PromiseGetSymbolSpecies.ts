import uncurryThis from "./uncurryThis.js";

const { get } = Object.getOwnPropertyDescriptor(Promise, Symbol.species);
// @ts-ignore
const PromiseGetSymbolSpecies = uncurryThis(get, Promise);
export = PromiseGetSymbolSpecies;
