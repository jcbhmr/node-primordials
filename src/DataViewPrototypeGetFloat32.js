/** @type {(this: DataView, ...a: Parameters<typeof DataView.prototype.getFloat32>) => ReturnType<typeof DataView.prototype.getFloat32>} */
const DataViewPrototypeGetFloat32 = Object.call.bind(
  DataView.prototype.getFloat32
);
module.exports = DataViewPrototypeGetFloat32;
