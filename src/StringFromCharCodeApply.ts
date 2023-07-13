import applyBind from "./applyBind.js";

// @ts-ignore
const StringFromCharCodeApply = applyBind(String.fromCharCode, String) as (
  a: number[]
) => string;
export = StringFromCharCodeApply;
