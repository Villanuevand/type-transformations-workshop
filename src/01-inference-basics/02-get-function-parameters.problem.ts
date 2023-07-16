import { Equal, Expect } from "../helpers/type-utils";

const makeQuery = (
    url: string,
    opts?: {
        method?: string;
        headers?: {
            [key: string]: string;
        };
        body?: string;
    },
) => {
};

// Parameters returns a tuple of the parameters of a function.
// https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype
type MakeQueryParameters = Parameters<typeof makeQuery>;

type tests = [
    Expect<
        Equal<
            MakeQueryParameters,
            [
                url: string,
                opts?: {
                    method?: string;
                    headers?: {
                        [key: string]: string;
                    };
                    body?: string;
                },
            ]
        >
    >,
];
