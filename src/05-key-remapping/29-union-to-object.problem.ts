import {Equal, Expect} from "../helpers/type-utils";

type Route = "/" | "/about" | "/admin" | "/admin/users";

//My solution, with help
// Route is an union type, no need keyof
type RoutesObject = {
    [K in Route]: K
}
type tests = [
    Expect<
        Equal<
            RoutesObject,
            {
                "/": "/";
                "/about": "/about";
                "/admin": "/admin";
                "/admin/users": "/admin/users";
            }
        >
    >,
];
