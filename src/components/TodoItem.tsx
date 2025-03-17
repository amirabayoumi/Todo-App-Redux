import { useRemoveTodoMutation, useToggleTodoMutation } from "../store/todoApi";

import { type Todo } from "../store/todoApi";

import { Badge } from "@/components/ui/badge";

type PropType = {
  todo: Todo;
};

// type Category = {
//   id: string;
//   name: string;
// };

const TodoItem = ({ todo: { id, text, completed, category } }: PropType) => {
  const [removeTodo] = useRemoveTodoMutation();
  const [toggleTodo] = useToggleTodoMutation();
  const getCategoryColor = (category: string): string => {
    const categories: { [key: string]: string } = {
      Work: "#f59e0b",
      Personal: "#ef4444",
      Shopping: "#3b82f6",
      Health: "#10b981",
      Learning: "#8b5cf6",
    };

    return categories[category] || "#6b7280"; // Default gray if no match
  };
  return (
    <li
      className="my-2 flex justify-between rounded-lg border border-slate-400 p-3 px-5"
      key={id}
    >
      <div className="flex gap-4">
        {" "}
        <button onClick={() => toggleTodo({ id, completed: !completed })}>
          {" "}
        </button>
        <input
          className=""
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo({ id, completed: !completed })}
        />
        <span>{text}</span>
      </div>

      <div className="align-center flex gap-4">
        <Badge
          style={{
            backgroundColor: getCategoryColor(category),
            color: "white",
          }}
        >
          {category}
        </Badge>

        <button onClick={() => removeTodo(id)} className="font-mono font-bold">
          X
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
