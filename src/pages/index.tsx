import type { NextPage } from "next";
import { trpc } from "~/utils/trpc";

const Home: NextPage = () => {
  const health = trpc.useQuery([
    "todo.hello",
    {
      text: "saheen",
    },
  ]);

  if (!health.data) {
    return <div>Loading...</div>;
  }

  console.log(health.data);

  return <div>{health.data.greeting}</div>;
};

export default Home;
