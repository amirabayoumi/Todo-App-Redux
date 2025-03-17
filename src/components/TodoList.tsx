import { useGetTodosQuery } from "../store/todoApi";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { data } = useGetTodosQuery();
  console.log(data);
  return (
    <ul className="flex flex-col gap-2">
      {data &&
        data.length > 0 &&
        data.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
    </ul>
  );
};
export default TodoList;
