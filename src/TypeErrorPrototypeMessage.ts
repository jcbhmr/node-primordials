
      const TypeErrorPrototypeMessage = Function.call.bind(
        TypeError.prototype.message
      );
      export = TypeErrorPrototypeMessage;
    