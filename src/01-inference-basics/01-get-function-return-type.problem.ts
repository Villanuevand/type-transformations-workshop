import { Equal, Expect } from "../helpers/type-utils";

const myFunc = () => {
  return "hello";
};

/**
 * How do we extract MyFuncReturn from myFunc?
 */

// ReturnType returns the return type of a function type.
// https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype
type MyFuncReturn = ReturnType<typeof myFunc>;

type tests = [Expect<Equal<MyFuncReturn, string>>];
