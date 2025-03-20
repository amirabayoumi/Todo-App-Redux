import { useAddTodoMutation } from "../store/todoApi";
import { useState } from "react";
import { toast } from "sonner"; // Import toast for better UX

const TodoForm = () => {
  const [addTodo] = useAddTodoMutation();
  const [error, setError] = useState("");

  const addNewTodo = (fd: FormData) => {
    const text = fd.get("text") as string;
    const category = fd.get("category") as string;

    if (!text || text.trim().length < 3) {
      setError("Todo must be at least 3 characters long");
      toast.error("Todo must be at least 3 characters long");
      return;
    }

    setError("");
    addTodo({ text, category });

    toast.success("Todo added successfully!");
  };

  return (
    <form action={addNewTodo} className="my-10 flex flex-col gap-4 sm:flex-row">
      <div className="w-full">
        <input
          type="text"
          name="text"
          className={`w-full rounded-lg border px-4 py-3 ${
            error ? "border-red-500" : "border-gray-400"
          }`}
          placeholder="Add a new todo"
          minLength={3}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>

      <select
        name="category"
        className="w-full min-w-[120px] rounded-lg border border-gray-400 p-2 sm:w-auto"
      >
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Shopping">Shopping</option>
        <option value="Health">Health</option>
        <option value="Learning">Learning</option>
      </select>

      <button className="w-full min-w-[120px] rounded-lg border bg-black px-4 py-3 text-white sm:w-auto">
        + Add
      </button>
    </form>
  );
};

export default TodoForm;
