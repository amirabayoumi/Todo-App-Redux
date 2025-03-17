import { useRemoveTodoMutation, useToggleTodoMutation } from "../store/todoApi";

import { type Todo } from "../store/todoApi";
type PropType = {
  todo: Todo;
};

const TodoItem = ({ todo: { id, text, completed } }: PropType) => {
  const [removeTodo] = useRemoveTodoMutation();
  const [toggleTodo] = useToggleTodoMutation();
  return (
    <li
      style={{ textDecoration: completed ? "line-through" : "none" }}
      className="mr-3 flex justify-between border border-slate-400 p-3"
      key={id}
    >
      <span>{text}</span>
      <div>
        <button onClick={() => toggleTodo({ id, checked: !completed })}>
          {completed ? "Undo" : "Done"}
        </button>
        <button onClick={() => removeTodo(id)}>Delete</button>
      </div>
    </li>
  );
};
export default TodoItem;
