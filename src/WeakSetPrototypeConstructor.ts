
      const WeakSetPrototypeConstructor = Function.call.bind(
        WeakSet.prototype.constructor
      );
      export = WeakSetPrototypeConstructor;
    