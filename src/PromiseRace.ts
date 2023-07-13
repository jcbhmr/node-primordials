import uncurryThis from "./uncurryThis.js";

// @ts-ignore
const PromiseRace = uncurryThis(Promise.race, Promise) as typeof Promise.race;
export = PromiseRace;
