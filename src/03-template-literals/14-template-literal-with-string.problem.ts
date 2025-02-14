// https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
// expect router start with / following an string type
type Route = `/${string}`;

export const goToRoute = (route: Route) => {
};

// Should succeed:

goToRoute("/users");
goToRoute("/");
goToRoute("/admin/users");

// Should error:

// @ts-expect-error
goToRoute("users/1");
// @ts-expect-error
goToRoute("http://facebook.com");
