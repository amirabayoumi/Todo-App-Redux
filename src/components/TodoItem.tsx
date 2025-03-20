import { useState } from "react";
import {
  useRemoveTodoMutation,
  useToggleTodoMutation,
  useUpdateTodoMutation,
} from "../store/todoApi";
import { type Todo } from "../store/todoApi";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MdModeEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type PropType = {
  todo: Todo;
};

const TodoItem = ({
  todo: { id, text, completed, category, description },
}: PropType) => {
  const [removeTodo] = useRemoveTodoMutation();
  const [toggleTodo] = useToggleTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  const [updatedText, setUpdatedText] = useState(text);
  const [updatedCategory, setUpdatedCategory] = useState(category);
  const [updatedDescription, setUpdatedDescription] = useState(description);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const getCategoryColor = (category: string): string => {
    const categories: { [key: string]: string } = {
      Work: "#f59e0b",
      Personal: "#ef4444",
      Shopping: "#3b82f6",
      Health: "#10b981",
      Learning: "#8b5cf6",
    };

    return categories[category] || "#6b7280";
  };

  const handleUpdateSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    updateTodo({
      id,
      text: updatedText,
      category: updatedCategory,
      description: updatedDescription,
    });
    toast.success("Todo Edited successfully");

    setIsDialogOpen(false);
  };

  return (
    <Collapsible>
      <CollapsibleTrigger className="m-0 w-full">
        <li
          className={`mt-2 flex justify-between rounded-lg border p-3 ${
            completed ? "bg-slate-400" : "bg-slate-100"
          }`}
          key={id}
        >
          <div className="flex gap-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleTodo({ id, completed: !completed });
              }}
            >
              <input
                className=""
                type="checkbox"
                checked={completed}
                onChange={() => {
                  toggleTodo({ id, completed: !completed });
                  toast.success("Todo updated successfully");
                }}
              />
            </button>
            <span
              className={`text-slate-600 ${completed ? "line-through" : ""}`}
            >
              {text}
            </span>
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

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger onClick={(e) => e.stopPropagation()}>
                <MdModeEdit />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Your Todo</DialogTitle>
                  <DialogDescription>
                    <form
                      className="my-10 flex flex-col gap-4"
                      onSubmit={handleUpdateSubmit}
                    >
                      <div>
                        <label htmlFor="text">Edit Todo Title :</label>
                        <input
                          type="text"
                          value={updatedText}
                          onChange={(e) => setUpdatedText(e.target.value)}
                          className="rounded-lg border border-gray-400 px-4 py-3"
                          placeholder={text}
                          style={{ width: "70%" }}
                        />
                      </div>
                      <div>
                        <label htmlFor="category">Edit Todo category:</label>
                        <select
                          id="category"
                          value={updatedCategory}
                          onChange={(e) => setUpdatedCategory(e.target.value)}
                          className="w-full rounded-lg border border-gray-400 p-2"
                        >
                          {[
                            "Work",
                            "Personal",
                            "Shopping",
                            "Health",
                            "Learning",
                          ].map((cat) => (
                            <option key={cat} value={cat}>
                              {cat}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="description">
                          Edit Todo description:
                        </label>
                        <Textarea
                          value={updatedDescription}
                          onChange={(e) =>
                            setUpdatedDescription(e.target.value)
                          }
                          className="w-1.9/2 m-2 w-full border-slate-400 bg-white placeholder:text-slate-800"
                        />
                      </div>
                      <button
                        className="rounded-lg border bg-black px-4 py-3 text-white"
                        type="submit"
                      >
                        Submit
                      </button>
                    </form>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <button
              onClick={() => {
                removeTodo(id);
                toast.success("Todo deleted successfully");
              }}
              className="font-mono font-bold"
            >
              <AiFillDelete />
            </button>
          </div>
        </li>
      </CollapsibleTrigger>

      <CollapsibleContent>
        <div className="flex translate-y-[-5px] flex-col rounded-b-lg border border-slate-400 bg-slate-100">
          <label className="mt-2 rounded-b-lg px-3 font-medium text-slate-800">
            Description
          </label>
          <p className="w-1.9/2 m-2 rounded-lg border border-slate-500 bg-white px-3 py-2 text-slate-600">
            {description}
          </p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default TodoItem;
