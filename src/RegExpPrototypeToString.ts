
      const RegExpPrototypeToString = Function.call.bind(
        RegExp.prototype.toString
      );
      export = RegExpPrototypeToString;
    