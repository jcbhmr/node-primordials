/** @type {(that: DataView, ...a: Parameters<typeof DataView.prototype.getInt32>) => ReturnType<typeof DataView.prototype.getInt32>} */
const DataViewPrototypeGetInt32 = Object.call.bind(DataView.prototype.getInt32);
module.exports = DataViewPrototypeGetInt32;
