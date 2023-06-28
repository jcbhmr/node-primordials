
      const RangeErrorPrototypeMessage = Function.call.bind(
        RangeError.prototype.message
      );
      export = RangeErrorPrototypeMessage;
    