import { useRemoveTodoMutation, useToggleTodoMutation } from "../store/todoApi";

import { type Todo } from "../store/todoApi";
type PropType = {
  todo: Todo;
};

const TodoItem = ({ todo: { id, text, completed, category } }: PropType) => {
  const [removeTodo] = useRemoveTodoMutation();
  const [toggleTodo] = useToggleTodoMutation();
  return (
    <li
      className="my-2 flex justify-between border border-slate-400 p-3"
      key={id}
    >
      <div className="flex gap-4">
        {" "}
        <button onClick={() => toggleTodo({ id, checked: !completed })}>
          {" "}
          done
        </button>
        <span>{text}</span>
      </div>

      <div className="flex gap-4">
        <p>{category}</p> <button onClick={() => removeTodo(id)}>Delete</button>
      </div>
    </li>
  );
};
export default TodoItem;
