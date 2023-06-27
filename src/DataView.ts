import { uncurryThis } from "./uncurryThis.js";

export const DataView = globalThis.DataView;
export const DataViewLength = DataView.length;
export const DataViewName = DataView.name;
export const DataViewPrototype = DataView.prototype;
export const DataViewPrototypeConstructor = uncurryThis(
  DataView.prototype.constructor
);
export const DataViewPrototypeGetBuffer = uncurryThis(
  Object.getOwnPropertyDescriptor(DataView.prototype, "buffer")!.get!
);
export const DataViewPrototypeGetByteLength = uncurryThis(
  Object.getOwnPropertyDescriptor(DataView.prototype, "byteLength")!.get!
);
export const DataViewPrototypeGetByteOffset = uncurryThis(
  Object.getOwnPropertyDescriptor(DataView.prototype, "byteOffset")!.get!
);
export const DataViewPrototypeGetInt8 = uncurryThis(DataView.prototype.getInt8);
export const DataViewPrototypeSetInt8 = uncurryThis(DataView.prototype.setInt8);
export const DataViewPrototypeGetUint8 = uncurryThis(
  DataView.prototype.getUint8
);
export const DataViewPrototypeSetUint8 = uncurryThis(
  DataView.prototype.setUint8
);
export const DataViewPrototypeGetInt16 = uncurryThis(
  DataView.prototype.getInt16
);
export const DataViewPrototypeSetInt16 = uncurryThis(
  DataView.prototype.setInt16
);
export const DataViewPrototypeGetUint16 = uncurryThis(
  DataView.prototype.getUint16
);
export const DataViewPrototypeSetUint16 = uncurryThis(
  DataView.prototype.setUint16
);
export const DataViewPrototypeGetInt32 = uncurryThis(
  DataView.prototype.getInt32
);
export const DataViewPrototypeSetInt32 = uncurryThis(
  DataView.prototype.setInt32
);
export const DataViewPrototypeGetUint32 = uncurryThis(
  DataView.prototype.getUint32
);
export const DataViewPrototypeSetUint32 = uncurryThis(
  DataView.prototype.setUint32
);
export const DataViewPrototypeGetFloat32 = uncurryThis(
  DataView.prototype.getFloat32
);
export const DataViewPrototypeSetFloat32 = uncurryThis(
  DataView.prototype.setFloat32
);
export const DataViewPrototypeGetFloat64 = uncurryThis(
  DataView.prototype.getFloat64
);
export const DataViewPrototypeSetFloat64 = uncurryThis(
  DataView.prototype.setFloat64
);
export const DataViewPrototypeGetBigInt64 = uncurryThis(
  DataView.prototype.getBigInt64
);
export const DataViewPrototypeSetBigInt64 = uncurryThis(
  DataView.prototype.setBigInt64
);
export const DataViewPrototypeGetBigUint64 = uncurryThis(
  DataView.prototype.getBigUint64
);
export const DataViewPrototypeSetBigUint64 = uncurryThis(
  DataView.prototype.setBigUint64
);
export const DataViewPrototypeSymbolToStringTag =
  DataView.prototype[Symbol.toStringTag];
