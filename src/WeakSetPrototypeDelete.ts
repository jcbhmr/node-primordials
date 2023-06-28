
      const WeakSetPrototypeDelete = Function.call.bind(
        WeakSet.prototype.delete
      );
      export = WeakSetPrototypeDelete;
    