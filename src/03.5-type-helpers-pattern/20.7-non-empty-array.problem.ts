// Wiht research, my solution
// [T,...T[]], At least 1 or as long or short you want ...T[]
type NonEmptyArray<T extends {}> = [T, ...T[]];

// Matt's solution
//  type NonEmptyArray<T> = [T,...Array<T>];
export const makeEnum = (values: NonEmptyArray<string>) => {
};

makeEnum(["a"]);
makeEnum(["a", "b", "c"]);

// @ts-expect-error
makeEnum([]);
