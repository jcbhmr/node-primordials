// @ts-ignore
import ArrayPrototypeForEach from "../ArrayPrototypeForEach.js";
// @ts-ignore
import ReflectOwnKeys from "../ReflectOwnKeys.js";
// @ts-ignore
import ReflectGetOwnPropertyDescriptor from "../ReflectGetOwnPropertyDescriptor.js";
// @ts-ignore
import ReflectDefineProperty from "../ReflectDefineProperty.js";

function copyProps(src, dest) {
  ArrayPrototypeForEach(ReflectOwnKeys(src), (key) => {
    if (!ReflectGetOwnPropertyDescriptor(dest, key)) {
      ReflectDefineProperty(
        dest,
        key,

        { __proto__: null, ...ReflectGetOwnPropertyDescriptor(src, key) }
      );
    }
  });
}
export = copyProps;
