import uncurryThis from "./uncurryThis.js";

// @ts-ignore
const PromiseAll = uncurryThis(Promise.all, Promise) as typeof Promise.all;
export = PromiseAll;
