import applyBind from "./applyBind.js";

const StringPrototypeConcatApply = applyBind(String.prototype.concat);
export = StringPrototypeConcatApply;
