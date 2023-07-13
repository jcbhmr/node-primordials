import applyBind from "./applyBind.js";

// @ts-ignore
const MathMinApply = applyBind(Math.min, Math) as (a: number[]) => number;
export = MathMinApply;
