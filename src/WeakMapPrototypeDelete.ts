
      const WeakMapPrototypeDelete = Function.call.bind(
        WeakMap.prototype.delete
      );
      export = WeakMapPrototypeDelete;
    