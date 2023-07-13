import uncurryThis from "./uncurryThis.js";
import StringIteratorPrototype from "./StringIteratorPrototype.js";
const StringIteratorPrototypeNext = uncurryThis(StringIteratorPrototype.next);
export = StringIteratorPrototypeNext;
