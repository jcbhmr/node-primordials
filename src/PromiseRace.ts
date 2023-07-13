import uncurryThis from "./uncurryThis.js";

const PromiseRace = uncurryThis(Promise.race, Promise);
export = PromiseRace;
