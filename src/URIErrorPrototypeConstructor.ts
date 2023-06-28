
      const URIErrorPrototypeConstructor = Function.call.bind(
        URIError.prototype.constructor
      );
      export = URIErrorPrototypeConstructor;
    