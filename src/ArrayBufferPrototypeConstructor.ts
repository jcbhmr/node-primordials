
      const ArrayBufferPrototypeConstructor = Function.call.bind(
        ArrayBuffer.prototype.constructor
      );
      export = ArrayBufferPrototypeConstructor;
    