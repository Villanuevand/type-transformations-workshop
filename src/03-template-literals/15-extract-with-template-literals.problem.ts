import {Equal, Expect} from "../helpers/type-utils";

type Routes = "/users" | "/users/:id" | "/posts" | "/posts/:id";

// My solution
type RouteEntity = Exclude<Routes, `${string}/:id`>;
// Matt's solution
type _DynamicRoutes = Extract<Routes, `${string}:${string}`>
type DynamicRoutes = `${RouteEntity}/:id`;


type tests = [Expect<Equal<DynamicRoutes, "/users/:id" | "/posts/:id">>];
