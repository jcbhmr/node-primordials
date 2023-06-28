
      const RangeErrorPrototypeConstructor = Function.call.bind(
        RangeError.prototype.constructor
      );
      export = RangeErrorPrototypeConstructor;
    