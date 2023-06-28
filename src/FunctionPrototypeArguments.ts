
      const FunctionPrototypeArguments = Function.call.bind(
        Function.prototype.arguments
      );
      export = FunctionPrototypeArguments;
    