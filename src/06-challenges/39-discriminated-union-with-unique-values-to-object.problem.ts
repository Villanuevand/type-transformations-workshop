import { Equal, Expect } from "../helpers/type-utils";

type Route =
  | {
    route: "/";
    search: {
        page: string;
        perPage: string;
    };
}
    | { route: "/about" }
    | { route: "/admin" }
    | { route: "/admin/users" };


// How can return never as value? O.o
// I was returning: Record<K['route'], K extends {search: infer V} ? V : string> BAD
// Record return {} that's no what problems ask for. =/
type RoutesObject = {
    [K in Route as K['route']]: K extends { search: infer V } ? V : never
};


type tests = [
    Expect<
        Equal<
            RoutesObject,
            {
                "/": {
                    page: string;
                    perPage: string;
        };
        "/about": never;
        "/admin": never;
        "/admin/users": never;
      }
    >
  >,
];
