import { Equal, Expect } from "../helpers/type-utils";

const testingFrameworks = {
  vitest: {
    label: "Vitest",
  },
  jest: {
    label: "Jest",
  },
  mocha: {
    label: "Mocha",
  },
};

// https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
type TestingFramework = keyof typeof testingFrameworks

type tests = [Expect<Equal<TestingFramework, "vitest" | "jest" | "mocha">>];
