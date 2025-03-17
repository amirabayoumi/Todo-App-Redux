import { useAddTodoMutation } from "../store/todoApi";

const TodoForm = () => {
  const [addTodo] = useAddTodoMutation();
  const test = (fd: FormData) => {
    addTodo({
      text: fd.get("text") as string,
      category: fd.get("category") as string,
    });
  };
  return (
    <form action={test} className="my-10 flex gap-4">
      <input
        type="text"
        name="text"
        className="rounded-lg border border-gray-400 px-4 py-3"
        placeholder="Add a new todo"
        style={{ width: "70%" }}
      />
      <select
        name="category"
        style={{ width: "15%" }}
        className="rounded-lg border border-gray-400 p-2"
      >
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Shopping">Shopping</option>
        <option value="Health">Health</option>
        <option value="Learning">Learning</option>
      </select>
      <button
        className="rounded-lg border bg-black px-4 py-3 text-white"
        style={{ width: "15%" }}
      >
        + Add
      </button>
    </form>
  );
};
export default TodoForm;
