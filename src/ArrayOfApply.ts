import applyBind from "./applyBind.js";

// @ts-ignore
const ArrayOfApply = applyBind(Array.of, Array) as <T extends any[]>(a: T) => T;
export = ArrayOfApply;
