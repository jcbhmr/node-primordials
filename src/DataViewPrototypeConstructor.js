/** @type {(this: DataView, ...a: Parameters<typeof DataView.prototype.constructor>) => ReturnType<typeof DataView.prototype.constructor>} */
const DataViewPrototypeConstructor = Object.call.bind(
  DataView.prototype.constructor
);
module.exports = DataViewPrototypeConstructor;
