import { useGetTodosQuery } from "../store/todoApi";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { selectFilter } from "@/store/filterSlice";
import { selectPagination } from "@/store/paginationSlice";
import { useState } from "react";
import { updateStatic } from "@/store/staticSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const perPage = useSelector(selectPagination);
  const { data, error, isLoading } = useGetTodosQuery();
  const filter = useSelector(selectFilter);

  const [page, setPage] = useState(1);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading todos.</p>;
  }

  if (!data) {
    return <p>No data found.</p>;
  }

  // Calculate static information
  const totalTodos = data.length;
  const activeTodos = data.filter((todo) => !todo.completed).length;
  const completedTodos = data.filter((todo) => todo.completed).length;

  // Dispatch updateStatic with calculated values
  dispatch(
    updateStatic({
      totalTodos,
      activeTodos,
      completedTodos,
    }),
  );

  const filteredData = data.filter((todo) => {
    const statusMatch =
      filter.statusFilter === "all" ||
      (filter.statusFilter === "completed" ? todo.completed : !todo.completed);
    const categoryMatch =
      filter.categoryFilter === "all" ||
      todo.category === filter.categoryFilter;
    return statusMatch && categoryMatch;
  });

  // Dispatch updateStatic with calculated values

  //pagination
  const totalPages = Math.ceil(filteredData.length / perPage.page);
  const startIndex = (page - 1) * perPage.page;
  const endIndex = startIndex + perPage.page;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  return (
    <div>
      <ul className="flex flex-col gap-2">
        {paginatedData.length > 0 ? (
          paginatedData.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        ) : (
          <li>No todos found</li>
        )}
      </ul>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`${
                page === index + 1 ? "bg-blue-500" : "bg-gray-200"
              } rounded-lg px-4 py-2`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;
