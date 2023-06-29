/** @type {(this: DataView, ...a: Parameters<typeof DataView.prototype.setFloat32>) => ReturnType<typeof DataView.prototype.setFloat32>} */
const DataViewPrototypeSetFloat32 = Object.call.bind(
  DataView.prototype.setFloat32
);
module.exports = DataViewPrototypeSetFloat32;
