import { useRemoveTodoMutation, useToggleTodoMutation } from "../store/todoApi";

import { type Todo } from "../store/todoApi";

import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

type PropType = {
  todo: Todo;
};

// type Category = {
//   id: string;
//   name: string;
// };

const TodoItem = ({
  todo: { id, text, completed, category, description },
}: PropType) => {
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
    <>
      <Collapsible>
        <CollapsibleTrigger className="m-0 w-full">
          <li
            className="mt-2 flex justify-between rounded-lg border border-slate-400 p-3"
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
                onChange={() => {
                  toggleTodo({ id, completed: !completed });
                  toast.success("Todo updated successfully");
                }}
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

              <button
                onClick={() => {
                  removeTodo(id);
                  toast.success("Todo deleted successfully");
                }}
                className="font-mono font-bold"
              >
                X
              </button>
            </div>
          </li>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="flex translate-y-[-5px] flex-col rounded-b-lg border border-slate-400 bg-slate-100">
            <label className="mt-2 rounded-b-lg px-3 font-medium text-slate-800">
              Description
            </label>{" "}
            <Textarea
              placeholder={description}
              className="w-1.9/2 m-2 border-slate-400 bg-white placeholder:text-slate-800"
            />
          </div>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
};

export default TodoItem;
