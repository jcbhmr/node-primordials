# Node.js `primordials` object

## Installation

Install this package using npm, [Yarn], or [pnpm]!

```sh
npm install @jcbhmr/node-primordials
```

This package is also compatible with Deno via their compatibility layer. You can
import the package directly using [the new `npm:` specifier], or a
Deno-compatible ESM CDN like [esm.sh] or [jsDelivr].

```js
import {} from "npm:@jcbhmr/node-primordials";
import {} from "https://esm.sh/@jcbhmr/node-primordials";
```

If you're using not using a build tool and you just want to use the package in
your browser, you can use an ESM npm CDN like [esm.sh] or [jsDelivr].

```js
import {} from "https://esm.sh/@jcbhmr/node-primordials";
```

## Usage

This package provides the `primordials` object from Node.js. You can import that
object directly, or it is also exposed to the global scope.

```js
import {
  ArrayIsArray,
  ArrayPrototypePushApply,
} from "@jcbhmr/node-primordials";

export default function pushToArrayLike(arrayLike, ...items) {
  if (ArrayIsArray(arrayLike)) {
    return ArrayPrototypePushApply(arrayLike, items);
  } else {
    for (let i = 0; i < items.length; i++) {
      arrayLike[arrayLike.length] = items[i];
    }
    return arrayLike.length;
  }
}
```

💡 For non-JavaScript identifiers like `RegExpGet$&`, you can use strings as
names in the `import` statement.

```js
import { "RegExpGet$&" as RegExpGet$amp } from "@jcbhmr/node-primordials";
```

## Development

This package contains code ripped directly from Node.js core. The only code that
is actually written by me is `index.js` and `index.d.ts`. Everything in `lib/`
and `typings/` is from Node.js core. There's also a bunch of generated code to
properly prime the TypeScript LSP to give you intellisense for both named
exports and default exports.

You can see a list of what the current internal `primordials` object looks like
for your current Node.js version by running this:

```sh
NODE_NO_WARNINGS=1 node --expose-internals -r internal/test/binding \
  -p 'Reflect.ownKeys(primordials).join("\n")'
```

If you want to re-generate the exports list for the `.d.ts` or `index.js` files,
use one of these scripts. The reason we need a bunch of
`module.exports = { ... }` stuff that does nothing in `index.js` is so that
Node.js can search for `/module.exports\s*=.../` or similar to define static
CJS-to-ESM named exports. Otherwise, the entire `module.exports` object would be
exported as a default export. In order to get named `import { thing }` exports,
we need to make them statically analyzable by Node.js.

You can generate these exports using the following scripts:

```sh
tools/generate-cjs-exports.mjs
tools/generate-dts-exports.mjs
```
