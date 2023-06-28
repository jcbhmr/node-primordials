
      const RegExpPrototypeSticky = Function.call.bind(
        RegExp.prototype.sticky
      );
      export = RegExpPrototypeSticky;
    