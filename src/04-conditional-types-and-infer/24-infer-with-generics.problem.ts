import { Equal, Expect } from "../helpers/type-utils";

interface MyComplexInterface<Event, Context, Name, Point> {
  getEvent: () => Event;
  getContext: () => Context;
  getName: () => Name;
  getPoint: () => Point;
}

type Example = MyComplexInterface<
    "click",
    "window",
    "my-event",
    { x: 12; y: 14 }
>;
// My solution
// We can infer differents slots in value types
type GetPoint<T> = T extends MyComplexInterface<any, any, any, infer D> ? D : never;

type tests = [Expect<Equal<GetPoint<Example>, { x: 12; y: 14 }>>];
