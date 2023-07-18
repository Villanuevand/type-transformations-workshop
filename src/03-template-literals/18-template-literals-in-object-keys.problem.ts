import {Equal, Expect} from "../helpers/type-utils";

type TemplateLiteralKey = `${"user" | "post" | "comment"}${"Id" | "Name"}`;

// My solution
type ObjectOfKeys = Record<TemplateLiteralKey, string>;

type tests = [
    Expect<
        Equal<
            ObjectOfKeys,
            {
                userId: string;
                userName: string;
                postId: string;
                postName: string;
        commentId: string;
        commentName: string;
      }
    >
  >,
];
