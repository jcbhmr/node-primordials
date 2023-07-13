import uncurryThis from "./uncurryThis.js";

const PromiseAllSettled = uncurryThis(Promise.allSettled, Promise);
export = PromiseAllSettled;
