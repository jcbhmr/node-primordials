
      const WeakRefPrototypeConstructor = Function.call.bind(
        WeakRef.prototype.constructor
      );
      export = WeakRefPrototypeConstructor;
    