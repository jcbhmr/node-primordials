import applyBind from "./applyBind.js";

// @ts-ignore
const MathHypotApply = applyBind(Math.hypot, Math) as (a: number[]) => number;
export = MathHypotApply;
