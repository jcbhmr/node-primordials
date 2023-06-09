type TypedArray = (
  | Uint8Array
  | Int8Array
  | Uint16Array
  | Int16Array
  | Uint32Array
  | Int32Array
  | Uint8ClampedArray
  | Float32Array
  | Float64Array
) & {
  // 🤷‍♂️ Doesn't automatically get the right type, so we have to do it manually.
  toLocaleString:
    | Uint8Array["toLocaleString"]
    | Int8Array["toLocaleString"]
    | Uint16Array["toLocaleString"]
    | Int16Array["toLocaleString"]
    | Uint32Array["toLocaleString"]
    | Int32Array["toLocaleString"]
    | Uint8ClampedArray["toLocaleString"]
    | Float32Array["toLocaleString"]
    | Float64Array["toLocaleString"];
};
const TypedArray = Object.getPrototypeOf(Uint8Array);
export = TypedArray;
