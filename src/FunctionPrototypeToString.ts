const FunctionPrototypeToString = Function.call.bind(
  Function.prototype.toString
);
export = FunctionPrototypeToString;
