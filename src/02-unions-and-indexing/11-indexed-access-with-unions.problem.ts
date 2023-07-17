import { Equal, Expect } from "../helpers/type-utils";

export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

// My solution
type ProgramModeEnumMap = typeof programModeEnumMap[keyof typeof programModeEnumMap];
export type IndividualProgram = Exclude<ProgramModeEnumMap, "group" | "announcement">

// Matt's solutions checks, next files 11-indexed-access-with-unions.solution.1.ts and 11-indexed-access-with-unions.solution.2.ts


type tests = [
  Expect<
      Equal<
          IndividualProgram,
          "1on1" | "selfDirected" | "planned1on1" | "plannedSelfDirected"
      >
  >,
];
