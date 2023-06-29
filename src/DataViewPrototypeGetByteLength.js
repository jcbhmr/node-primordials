/** @type {(that: DataView) => typeof DataView.prototype.byteLength} */
const DataViewPrototypeGetByteLength = Object.call.bind(
  Object.getOwnPropertyDescriptor(DataView.prototype, "byteLength").get
);
module.exports = DataViewPrototypeGetByteLength;
