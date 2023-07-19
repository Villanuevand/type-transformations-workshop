import {Equal, Expect} from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

// My solution - NO IDEA
// Check 28-distributive-conditional-types.solution.1.ts and 28-distributive-conditional-types.solution.2.ts
type AppleOrBanana = Fruit extends "apple" | "banana" ? Fruit : never;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
