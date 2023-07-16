import {Equal, Expect} from "../helpers/type-utils";

const getUser = () => {
  return Promise.resolve({
    id: "123",
    name: "John",
    email: "john@example.com",
  });
};

// My solution
type getUserType = ReturnType<typeof getUser>
type ReturnValue = Awaited<getUserType>;

// Matt solution:  ReturnValue = Awaited<ReturnType<typeof getUser>>;
// https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype

type tests = [
  Expect<Equal<ReturnValue, { id: string; name: string; email: string }>>,
];
