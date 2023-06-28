
      const FunctionPrototypeName = Function.call.bind(
        Function.prototype.name
      );
      export = FunctionPrototypeName;
    