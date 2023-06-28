while read f; do
  rm -f src/$f.*
  echo "// TODO: $f" >> src/$f.ts
  echo "const $f = undefined;" >> src/$f.ts
  echo "export = $f;" >> src/$f.ts
done <primordials.txt
rm -f src/index.*
while read f; do
  echo "export { default as $f } from \"./$f.js\";" >> src/index.ts
done <primordials.txt
