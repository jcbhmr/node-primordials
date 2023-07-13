import uncurryThis from "./uncurryThis.js";

const PromiseReject = uncurryThis(Promise.reject, Promise);
export = PromiseReject;
