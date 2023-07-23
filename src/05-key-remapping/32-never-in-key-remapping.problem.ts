import {Equal, Expect} from "../helpers/type-utils";

interface Example {
    name: string;
    age: number;
    id: string;
    organisationId: string;
    groupId: string;
}

// My solution
type HasId<T> = T extends `id${string}` | `${string}Id` ? T : never;
// Good refactor: T extends `${string}${"id" | "Id"}${string}`

type OnlyIdKeys<T> = {
    [K in keyof T as HasId<K>]: T[K];
};

type D = OnlyIdKeys<Example>

type tests = [
    Expect<
        Equal<
            OnlyIdKeys<Example>,
            {
                id: string;
                organisationId: string;
                groupId: string;
            }
        >
    >,
    Expect<Equal<OnlyIdKeys<{}>, {}>>
];
