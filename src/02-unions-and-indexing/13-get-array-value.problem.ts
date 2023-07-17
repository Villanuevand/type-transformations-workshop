import {Equal, Expect} from "../helpers/type-utils";

const fruits = ["apple", "banana", "orange"] as const;

// Not by me

type AppleOrBanana = typeof fruits[1 | 0]
type Fruit = typeof fruits[number]

type tests = [
  Expect<Equal<AppleOrBanana, "apple" | "banana">>,
  Expect<Equal<Fruit, "apple" | "banana" | "orange">>,
];
