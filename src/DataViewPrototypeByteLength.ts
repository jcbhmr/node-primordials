
      const DataViewPrototypeByteLength = Function.call.bind(
        DataView.prototype.byteLength
      );
      export = DataViewPrototypeByteLength;
    