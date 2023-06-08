#!/usr/bin/env node
import { $ } from "zx";
$.verbose = false;

// https://github.com/marcello3d/node-tosource/blob/e415c4366ec3c8a958be8a243806323611000f29/src/tosource.ts#L105-L106
const KEYWORD_REGEXP =
  /^(abstract|boolean|break|byte|case|catch|char|class|const|continue|debugger|default|delete|do|double|else|enum|export|extends|false|final|finally|float|for|function|goto|if|implements|import|in|instanceof|int|interface|long|native|new|null|package|private|protected|public|return|short|static|super|switch|synchronized|this|throw|throws|transient|true|try|typeof|undefined|var|void|volatile|while|with)$/;

// https://github.com/marcello3d/node-tosource/blob/e415c4366ec3c8a958be8a243806323611000f29/src/tosource.ts#L108-L112
function legalKey(key) {
  return (
    /^([a-z_$][0-9a-z_$]*|[0-9]+)$/gi.test(key) && !KEYWORD_REGEXP.test(key)
  );
}

const nativeNames = (await $`tools/dump-primordials.sh`)
  .toString()
  .trim()
  .split("\n")
  .sort();

const labels1 = nativeNames.filter((x) => legalKey(x));
console.log(`export const {${labels1}} = primordials;`);

const remainingNames = nativeNames.filter((x) => !legalKey(x));
const labels2 = remainingNames.map((x, i) => JSON.stringify(x) + ":_" + i);
console.log(`const {${labels2}} = primordials;`);
const as1 = remainingNames.map((x, i) => `_${i} as ${JSON.stringify(x)}`);
console.log(`export {${as1}};`);
