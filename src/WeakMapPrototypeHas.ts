
      const WeakMapPrototypeHas = Function.call.bind(
        WeakMap.prototype.has
      );
      export = WeakMapPrototypeHas;
    