declare namespace uncurryThis {
  export type UncurryThis<
    T extends (this: unknown, ...args: unknown[]) => unknown
  > = (self: ThisParameterType<T>, ...args: Parameters<T>) => ReturnType<T>;
  export type UncurryThisStaticApply<
    T extends (this: unknown, ...args: unknown[]) => unknown
  > = (self: ThisParameterType<T>, args: Parameters<T>) => ReturnType<T>;

  export type StaticCall<
    T extends (this: unknown, ...args: unknown[]) => unknown
  > = (...args: Parameters<T>) => ReturnType<T>;
  export type StaticApply<
    T extends (this: unknown, ...args: unknown[]) => unknown
  > = (args: Parameters<T>) => ReturnType<T>;

  export type UncurryMethod<O, K extends keyof O, T = O> = O[K] extends (
    this: infer U,
    ...args: infer A
  ) => infer R
    ? (self: unknown extends U ? T : U, ...args: A) => R
    : never;

  export type UncurryMethodApply<O, K extends keyof O, T = O> = O[K] extends (
    this: infer U,
    ...args: infer A
  ) => infer R
    ? (self: unknown extends U ? T : U, args: A) => R
    : never;

  export type UncurryGetter<O, K extends keyof O, T = O> = (self: T) => O[K];
  export type UncurrySetter<O, K extends keyof O, T = O> = (
    self: T,
    value: O[K]
  ) => void;
}

const { apply, bind, call } = Function.prototype;

const uncurryThis: <T extends (...args: any[]) => any>(
  fn: T
) => uncurryThis.UncurryThis<T> = bind.bind(call);

export = uncurryThis;
