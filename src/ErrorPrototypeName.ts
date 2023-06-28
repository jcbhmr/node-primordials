
      const ErrorPrototypeName = Function.call.bind(
        Error.prototype.name
      );
      export = ErrorPrototypeName;
    