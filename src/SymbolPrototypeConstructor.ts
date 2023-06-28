
      const SymbolPrototypeConstructor = Function.call.bind(
        Symbol.prototype.constructor
      );
      export = SymbolPrototypeConstructor;
    