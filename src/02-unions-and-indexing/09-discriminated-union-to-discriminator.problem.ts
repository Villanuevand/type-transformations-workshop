import { Equal, Expect } from "../helpers/type-utils";

export type Event =
  | {
      type: "click";
      event: MouseEvent;
}
    | {
    type: "focus";
    event: FocusEvent;
}
    | {
    type: "keydown";
    event: KeyboardEvent;
};

// Using index access types.
type EventType = Event["type"];
type tests = [Expect<Equal<EventType, "click" | "focus" | "keydown">>];
