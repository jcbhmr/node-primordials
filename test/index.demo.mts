// TODO: Make this a real .test-d.ts file or something
import * as index from "../index.js";
import type { Primordials } from "../index.js";

// Make sure these don't have red squiggles!
index.DatePrototypeGetMonth(new Date());
index.ArrayPrototypeIncludes([1], 1);
index.default.ArrayBufferIsView(new ArrayBuffer(10));
index.default.RegExpPrototypeGetFlags(/./g);
