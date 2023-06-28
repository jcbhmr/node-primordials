
      const RegExpPrototypeSource = Function.call.bind(
        RegExp.prototype.source
      );
      export = RegExpPrototypeSource;
    