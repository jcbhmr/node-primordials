import { uncurryThis } from "./uncurryThis.js";

export const Date = globalThis.Date;
export const DateLength = Date.length;
export const DateName = Date.name;
export const DatePrototype = Date.prototype;
export const DateNow = Date.now;
export const DateParse = Date.parse;
export const DateUTC = Date.UTC;
export const DatePrototypeConstructor = uncurryThis(Date.prototype.constructor);
export const DatePrototypeToString = uncurryThis(Date.prototype.toString);
export const DatePrototypeToDateString = uncurryThis(
  Date.prototype.toDateString
);
export const DatePrototypeToTimeString = uncurryThis(
  Date.prototype.toTimeString
);
export const DatePrototypeToISOString = uncurryThis(Date.prototype.toISOString);
export const DatePrototypeToUTCString = uncurryThis(Date.prototype.toUTCString);
// @ts-ignore
export const DatePrototypeToGMTString = uncurryThis(Date.prototype.toGMTString);
export const DatePrototypeGetDate = uncurryThis(Date.prototype.getDate);
export const DatePrototypeSetDate = uncurryThis(Date.prototype.setDate);
export const DatePrototypeGetDay = uncurryThis(Date.prototype.getDay);
export const DatePrototypeGetFullYear = uncurryThis(Date.prototype.getFullYear);
export const DatePrototypeSetFullYear = uncurryThis(Date.prototype.setFullYear);
export const DatePrototypeGetHours = uncurryThis(Date.prototype.getHours);
export const DatePrototypeSetHours = uncurryThis(Date.prototype.setHours);
export const DatePrototypeGetMilliseconds = uncurryThis(
  Date.prototype.getMilliseconds
);
export const DatePrototypeSetMilliseconds = uncurryThis(
  Date.prototype.setMilliseconds
);
export const DatePrototypeGetMinutes = uncurryThis(Date.prototype.getMinutes);
export const DatePrototypeSetMinutes = uncurryThis(Date.prototype.setMinutes);
export const DatePrototypeGetMonth = uncurryThis(Date.prototype.getMonth);
export const DatePrototypeSetMonth = uncurryThis(Date.prototype.setMonth);
export const DatePrototypeGetSeconds = uncurryThis(Date.prototype.getSeconds);
export const DatePrototypeSetSeconds = uncurryThis(Date.prototype.setSeconds);
export const DatePrototypeGetTime = uncurryThis(Date.prototype.getTime);
export const DatePrototypeSetTime = uncurryThis(Date.prototype.setTime);
export const DatePrototypeGetTimezoneOffset = uncurryThis(
  Date.prototype.getTimezoneOffset
);
export const DatePrototypeGetUTCDate = uncurryThis(Date.prototype.getUTCDate);
export const DatePrototypeSetUTCDate = uncurryThis(Date.prototype.setUTCDate);
export const DatePrototypeGetUTCDay = uncurryThis(Date.prototype.getUTCDay);
export const DatePrototypeGetUTCFullYear = uncurryThis(
  Date.prototype.getUTCFullYear
);
export const DatePrototypeSetUTCFullYear = uncurryThis(
  Date.prototype.setUTCFullYear
);
export const DatePrototypeGetUTCHours = uncurryThis(Date.prototype.getUTCHours);
export const DatePrototypeSetUTCHours = uncurryThis(Date.prototype.setUTCHours);
export const DatePrototypeGetUTCMilliseconds = uncurryThis(
  Date.prototype.getUTCMilliseconds
);
export const DatePrototypeSetUTCMilliseconds = uncurryThis(
  Date.prototype.setUTCMilliseconds
);
export const DatePrototypeGetUTCMinutes = uncurryThis(
  Date.prototype.getUTCMinutes
);
export const DatePrototypeSetUTCMinutes = uncurryThis(
  Date.prototype.setUTCMinutes
);
export const DatePrototypeGetUTCMonth = uncurryThis(Date.prototype.getUTCMonth);
export const DatePrototypeSetUTCMonth = uncurryThis(Date.prototype.setUTCMonth);
export const DatePrototypeGetUTCSeconds = uncurryThis(
  Date.prototype.getUTCSeconds
);
export const DatePrototypeSetUTCSeconds = uncurryThis(
  Date.prototype.setUTCSeconds
);
export const DatePrototypeValueOf = uncurryThis(Date.prototype.valueOf);
// @ts-ignore
export const DatePrototypeGetYear = uncurryThis(Date.prototype.getYear);
// @ts-ignore
export const DatePrototypeSetYear = uncurryThis(Date.prototype.setYear);
export const DatePrototypeToJSON = uncurryThis(Date.prototype.toJSON);
export const DatePrototypeToLocaleString = uncurryThis(
  Date.prototype.toLocaleString
);
export const DatePrototypeToLocaleDateString = uncurryThis(
  Date.prototype.toLocaleDateString
);
export const DatePrototypeToLocaleTimeString = uncurryThis(
  Date.prototype.toLocaleTimeString
);
export const DatePrototypeSymbolToPrimitive = uncurryThis(
  Date.prototype[Symbol.toPrimitive]
);
