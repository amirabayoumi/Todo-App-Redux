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
    <form action={test}>
      <input type="text" name="text" className="border" />
      <select name="category">
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Shopping">Shopping</option>
        <option value="Health">Health</option>
        <option value="Learning">Learning</option>
      </select>
      <button className="border px-4 py-3">+</button>
    </form>
  );
};
export default TodoForm;
