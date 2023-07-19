import {Equal, Expect} from "../helpers/type-utils";

// My solution
type YouSayGoodbyeAndISayHello<T> =
    T extends "hello" ? "goodbye" :
        T extends "goodbye" ? "hello" : never;


// Matt's solution
type _YouSayGoodbyeAndISayHello<T> = T extends "hello" | "goodbye"
    ? T extends "hello" ? "goodbye" : "hello"
    : never
type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"alright pal">, never>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<1>, never>>,
];
