import { Equal, Expect } from "../helpers/type-utils";

const parser1 = {
  parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
  extract: () => true,
};

// My solution
type GetParserResult<T> = T extends { [key: string]: () => infer D } ?
    D : T extends () => infer V ? V : never;

// Matt's solution: 27-infer-in-union-types.solution.2.ts
type tests = [
  Expect<Equal<GetParserResult<typeof parser1>, number>>,
  Expect<Equal<GetParserResult<typeof parser2>, string>>,
  Expect<Equal<GetParserResult<typeof parser3>, boolean>>,
];
