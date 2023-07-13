"use strict";
const ArrayPrototypeForEach = require("../ArrayPrototypeForEach.js");
const ReflectOwnKeys = require("../ReflectOwnKeys.js");
const ReflectGetOwnPropertyDescriptor = require("../ReflectGetOwnPropertyDescriptor.js");
const ReflectDefineProperty = require("../ReflectDefineProperty.js");
const copyProps = (src, dest) => {
  ArrayPrototypeForEach(ReflectOwnKeys(src), (key) => {
    if (!ReflectGetOwnPropertyDescriptor(dest, key)) {
      ReflectDefineProperty(
        dest,
        key,

        { __proto__: null, ...ReflectGetOwnPropertyDescriptor(src, key) }
      );
    }
  });
};
export = copyProps;
