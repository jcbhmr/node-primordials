
      const DatePrototypeToISOString = Function.call.bind(
        Date.prototype.toISOString
      );
      export = DatePrototypeToISOString;
    