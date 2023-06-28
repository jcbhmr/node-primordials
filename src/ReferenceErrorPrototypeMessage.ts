
      const ReferenceErrorPrototypeMessage = Function.call.bind(
        ReferenceError.prototype.message
      );
      export = ReferenceErrorPrototypeMessage;
    