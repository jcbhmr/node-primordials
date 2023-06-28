
      const SetPrototypeConstructor = Function.call.bind(
        Set.prototype.constructor
      );
      export = SetPrototypeConstructor;
    