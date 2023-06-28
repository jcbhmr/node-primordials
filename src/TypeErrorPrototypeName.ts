
      const TypeErrorPrototypeName = Function.call.bind(
        TypeError.prototype.name
      );
      export = TypeErrorPrototypeName;
    