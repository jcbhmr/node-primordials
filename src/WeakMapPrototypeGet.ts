
      const WeakMapPrototypeGet = Function.call.bind(
        WeakMap.prototype.get
      );
      export = WeakMapPrototypeGet;
    