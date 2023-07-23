import {Equal, Expect} from "../helpers/type-utils";

// My slution doesn't work.
type DeepPartial<T> = {
  [K in keyof T]?: K extends { [key: string]: infer D }
      ? D extends { [key: string]: infer E }
          ? E
          : D
      : K;
};

type MyType = {
  a: string;
  b: number;
  c: {
    d: string;
    e: {
      f: string;
      g: {
        h: string;
        i: string;
      }[];
    };
  };
};

type Result = DeepPartial<MyType>;

type tests = [
  Expect<
    Equal<
      Result,
      {
        a?: string;
        b?: number;
        c?: {
          d?: string;
          e?: {
            f?: string;
            g?: {
              h?: string;
              i?: string;
            }[];
          };
        };
      }
    >
  >
];
