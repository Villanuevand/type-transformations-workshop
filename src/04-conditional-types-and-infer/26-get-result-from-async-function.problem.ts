import { Equal, Expect } from "../helpers/type-utils";

const getServerSideProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json: { title: string } = await data.json();
  return {
    props: {
      json,
    },
  };
};
// My solution - not working
//type InferPropsFromServerSideFunction<T> = T extends ()=> infer PData ? Awaited<PData> : never ;

// Matt's solution
type InferPropsFromServerSideFunction<T> = T extends () => Promise<{ props: infer TData }> ? TData : never;
type tests = [
  Expect<
      Equal<
          InferPropsFromServerSideFunction<typeof getServerSideProps>,
          { json: { title: string } }
      >
  >
];
