
      const EvalErrorPrototypeConstructor = Function.call.bind(
        EvalError.prototype.constructor
      );
      export = EvalErrorPrototypeConstructor;
    