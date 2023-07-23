import {Equal, Expect} from "../helpers/type-utils";

interface Attributes {
    firstName: string;
    lastName: string;
    age: number;
}

// My solution
type AttributeGetters = {
    [K in keyof Attributes]: () => Attributes[K];
};

type tests = [
    Expect<
        Equal<
            AttributeGetters,
            {
                firstName: () => string;
                lastName: () => string;
                age: () => number;
            }
        >
    >,
];
