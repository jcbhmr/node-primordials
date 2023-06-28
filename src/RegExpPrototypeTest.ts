
      const RegExpPrototypeTest = Function.call.bind(
        RegExp.prototype.test
      );
      export = RegExpPrototypeTest;
    