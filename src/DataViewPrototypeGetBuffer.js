/** @type {(this: DataView) => typeof DataView.prototype.buffer} */
const DataViewPrototypeGetBuffer = Object.call.bind(
  Object.getOwnPropertyDescriptor(DataView.prototype, "buffer").get
);
module.exports = DataViewPrototypeGetBuffer;
