import uncurryThis from "./uncurryThis.js";
import ArrayIteratorPrototype from "./ArrayIteratorPrototype.js";

const ArrayIteratorPrototypeNext = uncurryThis(ArrayIteratorPrototype.next);
export = ArrayIteratorPrototypeNext;
