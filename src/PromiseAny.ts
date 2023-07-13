import uncurryThis from "./uncurryThis.js";

// @ts-ignore
const PromiseAny = uncurryThis(Promise.any, Promise) as typeof Promise.any;
export = PromiseAny;
