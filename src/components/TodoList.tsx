import { useGetTodosQuery } from "../store/todoApi";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { selectFilter } from "@/store/filterSlice";

const TodoList = () => {
  const { data, error, isLoading } = useGetTodosQuery(); // Added error and loading states
  const filter = useSelector(selectFilter);

  // Display loading or error state if necessary
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading todos.</p>;
  }

  if (!data) {
    return <p>No data found.</p>;
  }

  // Filter todos based on the filter state
  const filteredData = data.filter((todo) => {
    const statusMatch =
      filter.statusFilter === "all" ||
      (filter.statusFilter === "completed" ? todo.completed : !todo.completed);
    const categoryMatch =
      filter.categoryFilter === "all" ||
      todo.category === filter.categoryFilter;
    return statusMatch && categoryMatch;
  });

  return (
    <ul className="flex flex-col gap-2">
      {filteredData.length > 0 ? (
        filteredData.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <li>No todos found</li>
      )}
    </ul>
  );
};

export default TodoList;
