import type { NextPage } from "next";
import { trpc } from "~/utils/trpc";
import AddTodo from "~/components/AddTodo";
import Todo from "~/components/Todo";

const Home: NextPage = () => {
  const trpcContext = trpc.useContext();
  const addTodo = trpc.useMutation("todo.add", {
    onSuccess: () => {
      trpcContext.invalidateQueries(["todo.all"]);
    },
  });
  const allTodos = trpc.useQuery(["todo.all"]);

  if (!allTodos.data) {
    return <div>Loading...</div>;
  }

  const onAddTodo = (text: string) => {
    addTodo.mutateAsync({
      text,
    });
  };

  return (
    <>
      <AddTodo onAdd={onAddTodo} />
      {allTodos.data.map((todo) => (
        <div key={todo.id}>
          <Todo text={todo.text} />
        </div>
      ))}
    </>
  );
};

export default Home;
