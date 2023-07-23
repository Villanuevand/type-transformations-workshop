import {Equal, Expect} from "../helpers/type-utils";
import {S} from "ts-toolbelt";

type UserPath = "/users/:id";

type UserOrganisationPath = "/users/:id/organisations/:organisationId";
// I didn't make it, I made it to understand the explanation

// [number] at the end turns into a union type. O.o
type SplitGeneric<T extends string> = S.Split<T, "/">[number]

//type SplitedGeneric = SplitGeneric<UserPath>

// T extends string avoid error:
type ExtractPathParams<T extends string> = {
  [K in SplitGeneric<T> as K extends `:${infer P}`
      ? P : never]: string
};

type TestUser = ExtractPathParams<UserPath>;
type TestOrganization = ExtractPathParams<UserOrganisationPath>

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
      Equal<
          ExtractPathParams<UserOrganisationPath>,
          { id: string; organisationId: string }
      >
  >,
];
