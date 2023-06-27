import primordials from "@jcbhmr/node-primordials";

delete globalThis.Array;
globalThis.Number = () => 3;
String.prototype.trim = () => "No trim for you.";
Object.prototype.toString = () => "Hi Object!";

console.log("Using globals & prototypes...");
console.log(Number("45"));
console.log("  padded  ".trim());
console.log({}.toString());

console.log("Using primordials...");
console.log(primordials.Number("45"));
console.log(primordials.StringPrototypeTrim("  padded  "));
console.log(primordials.ObjectPrototypeToString({}));
