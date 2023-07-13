import applyBind from "./applyBind.js";

// @ts-ignore
const StringFromCodePointApply = applyBind(String.fromCodePoint, String) as (
  a: number[]
) => string;
export = StringFromCodePointApply;
