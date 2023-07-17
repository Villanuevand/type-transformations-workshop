import {Equal, Expect} from "../helpers/type-utils";

export const fakeDataDefaults = {
  String: "Default string",
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: "id",
};
// Index access
// https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html

// My solution
export type StringType = typeof fakeDataDefaults.String;
export type IntType = typeof fakeDataDefaults.Int;
export type FloatType = typeof fakeDataDefaults.Float;
export type BooleanType = typeof fakeDataDefaults.Boolean;
export type IDType = typeof fakeDataDefaults.ID;

// Matt solutions:
/*
type FakeDataDefaults = typeof fakeDataDefaults;
export type StringType = FakeDataDefaults["String"];
export type IntType = FakeDataDefaults["Int"];
export type FloatType = FakeDataDefaults["Float"];
export type BooleanType = FakeDataDefaults["Boolean"];
export type IDType = FakeDataDefaults["ID"];
*/


type tests = [
  Expect<Equal<StringType, string>>,
  Expect<Equal<IntType, number>>,
  Expect<Equal<FloatType, number>>,
  Expect<Equal<BooleanType, boolean>>,
  Expect<Equal<IDType, string>>,
];
