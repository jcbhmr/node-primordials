/** @type {(that: DataView) => typeof DataView.prototype.byteOffset} */
const DataViewPrototypeGetByteOffset = Object.call.bind(
  Object.getOwnPropertyDescriptor(DataView.prototype, "byteOffset").get
);
module.exports = DataViewPrototypeGetByteOffset;
