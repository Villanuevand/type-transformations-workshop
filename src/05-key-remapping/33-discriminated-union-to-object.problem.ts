type Route =
    | {
    route: "/";
    search: {
        page: string;
        perPage: string;
    };
}
    | { route: "/about"; search: {} }
    | { route: "/admin"; search: {} }
    | { route: "/admin/users"; search: {} };

import {Equal, Expect} from "../helpers/type-utils";

// With help (checking the solution xD)
type RoutesObject = {
    [K in Route as K['route']]: K['search']
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
                "/about": {};
                "/admin": {};
                "/admin/users": {};
            }
        >
    >,
];
