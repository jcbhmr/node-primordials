# Node.js `primordials` object

🧊 The native primordials object from Node.js for anywhere

<div align="center">

![](https://user-images.githubusercontent.com/61068799/250172175-b8a00130-d315-4345-b176-7b6614342626.png)

</div>

🤩 Great for authors who want safe intrinsics \
✅ Uses the internal `primordials` global if available \
📦 Works in Node.js, Deno, Bun and the browser \
⚠️ Uses CommonJS for maximum compatibility \
🔮 Works great with `import` via Node.js ESM interop!

## Installation

![npm](https://img.shields.io/static/v1?style=for-the-badge&message=npm&color=CB3837&logo=npm&logoColor=FFFFFF&label=)
![Yarn](https://img.shields.io/static/v1?style=for-the-badge&message=Yarn&color=2C8EBB&logo=Yarn&logoColor=FFFFFF&label=)
![pnpm](https://img.shields.io/static/v1?style=for-the-badge&message=pnpm&color=222222&logo=pnpm&logoColor=F69220&label=)
![jsDelivr](https://img.shields.io/static/v1?style=for-the-badge&message=jsDelivr&color=E84D3D&logo=jsDelivr&logoColor=FFFFFF&label=)

Install this package using npm, [Yarn], or [pnpm]!

```sh
npm install @nodefill/primordials
```

This package is also compatible with Deno via their compatibility layer. You can
import the package directly using [the new `npm:` specifier], or a
Deno-compatible ESM CDN like [esm.sh] or [jsDelivr].

```js
import {} from "npm:@nodefill/primordials";
import {} from "https://esm.sh/@nodefill/primordials";
```

🛑 On Deno, `import "npm:@nodefill/primordials"` doesn't work due to
[denoland/deno#19665]. You can still import it through esm.sh or esm.run, or
just import a sub-file directly. The error is due to Deno's CommonJS compat
layer not escaping named export names.

If you're using not using a build tool and you just want to use the package in
your browser, you can use an ESM npm CDN like [esm.sh] or [jsDelivr].

```js
import {} from "https://esm.sh/@nodefill/primordials";
import {} from "https://esm.run/@nodefill/primordials";
```

<details><summary>ℹ esm.sh and jsDeliver currently don't support
<code>eval</code>, <code>RegExpGet$&</code>, and other reserved identifiers as
named exports.</summary>

For example, this will work in Node.js:

```js
// Yes, this is valid JavaScript!
import { "RegExpGet$&" as RegExpGet$amp } from "@nodefill/primordials";

console.log(RegExpGet$amp());
//=> '\x00\x00\x00'
```

ℹ TypeScript (along with many other JS syntax highlighters and tools) don't
parse string named exports very well. See [microsoft/TypeScript#40594].

But it **will not work** when you use esm.sh or jsDelivr because they don't
generate code to ESM-export those string named exports. You can still use the
default export `primordials` object though:

```js
import primordials from "https://esm.sh/@nodefill/primordials";
const { "RegExpGet$&": RegExpGet$amp } = primordials;

console.log(RegExpGet$amp());
//=> '\x00\x00\x00'
```

</details>

## Usage

![Node.js](https://img.shields.io/static/v1?style=for-the-badge&message=Node.js&color=339933&logo=Node.js&logoColor=FFFFFF&label=)
![Deno](https://img.shields.io/static/v1?style=for-the-badge&message=Deno&color=000000&logo=Deno&logoColor=FFFFFF&label=)
![Browser](https://img.shields.io/static/v1?style=for-the-badge&message=Browser&color=4285F4&logo=Google+Chrome&logoColor=FFFFFF&label=)
![Bun](https://img.shields.io/static/v1?style=for-the-badge&message=Bun&color=000000&logo=Bun&logoColor=FFFFFF&label=)

This package provides the `primordials` object from Node.js. Each primordial is
also exposed as a separate `*.js` file for manual tree shaking.

```js
import { ArrayIsArray } from "@nodefill/primordials";
import ArrayPrototypeReduce from "@nodefill/primordials/ArrayPrototypeReduce.js";

const sum = (array) => {
  if (!Array.isArray(array)) {
    throw new TypeError(`${array} is not an array`);
  }
  return array.reduce((n, x) => n + x, 0);
};
const safeSum = (array) => {
  if (!ArrayIsArray(array)) {
    throw new TypeError(`${array} is not an array`);
  }
  return ArrayPrototypeReduce(array, (n, x) => n + x, 0);
};

Array.prototype.reduce = () => 100;

console.log(sum([1, 2, 3]));
//=> 100
console.log(safeSum([1, 2, 3]));
//=> 6
```

We also offer a `polyfill.js` export for to emulate the Node.js `primordials`
global object.

```js
import "@nodefill/primordials/polyfill.js";

console.log(primordials.ArrayIsArray([]));
//=> true
```

💿 Note that this package uses CommonJS! We rely on CJS ➡ ESM translation to
make this package work in ESM environments. This means that you can use this
package _anywhere_, but be warned that features of your bundler or environment
like tree-shaking may be affected. The best way to tree-shake is to manually
pluck out the primordials you need from the `*.js` files:

```js
import StringPrototypeSlice from "@nodefill/primordials/StringPrototypeSlice.js";
import ArrayBufferIsView from "@nodefill/primordials/ArrayBufferIsView.js";
import RegExpGet$amp from "@nodefill/primordials/RegExpGet$amp.js";
```

ℹ Files like `RegExpGet$&.js` are named `RegExpGet$amp.js` (replaced with HTML
entity names) to avoid issues with restrictive file systems like Windows. 😉

## Development

TODO: Describe dev process

<!-- prettier-ignore-start -->
[esm.sh]: https://esm.sh/
[jsDelivr]: https://www.jsdelivr.com/esm
[Yarn]: https://yarnpkg.com/
[pnpm]: https://pnpm.io/
[the new `npm:` specifier]: https://deno.land/manual/node/npm_specifiers
[microsoft/TypeScript#40594]: https://github.com/microsoft/TypeScript/issues/40594
[denoland/deno#19665]: https://github.com/denoland/deno/issues/19665
<!-- prettier-ignore-end -->
