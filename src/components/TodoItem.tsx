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
import clsx from "clsx";

type PropType = {
  todo: Todo;
};

const categoryVariants = {
  Work: "bg-orange-500 text-white",
  Personal: "bg-red-500 text-white",
  Shopping: "bg-blue-500 text-white",
  Health: "bg-green-500 text-white",
  Learning: "bg-purple-500 text-white",
  default: "bg-gray-500 text-white",
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
      <CollapsibleTrigger className="w-full">
        <li
          className={clsx(
            "mt-2 flex justify-between rounded-lg border p-3 transition-all",
            completed ? "bg-gray-300" : "bg-gray-100 hover:bg-gray-200",
          )}
          key={id}
        >
          <div className="flex items-center gap-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleTodo({ id, completed: !completed });
                toast.success("Todo updated successfully");
              }}
            >
              <input type="checkbox" checked={completed} readOnly />
            </button>
            <span
              className={clsx("text-gray-700", completed && "line-through")}
            >
              {text}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Badge
              className={
                categoryVariants[category as keyof typeof categoryVariants] ||
                categoryVariants.default
              }
            >
              {category}
            </Badge>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger onClick={(e) => e.stopPropagation()}>
                <MdModeEdit className="cursor-pointer text-cyan-900" />
              </DialogTrigger>

              <DialogContent
                className="max-w-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <DialogHeader>
                  <DialogTitle>Edit Todo</DialogTitle>
                  <DialogDescription>
                    <form
                      className="my-5 flex flex-col gap-4"
                      onSubmit={handleUpdateSubmit}
                    >
                      <div>
                        <label className="block text-sm font-medium">
                          Title:
                        </label>
                        <input
                          type="text"
                          value={updatedText}
                          onChange={(e) => setUpdatedText(e.target.value)}
                          className="w-full rounded-lg border border-gray-400 px-4 py-3 focus:ring focus:ring-cyan-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium">
                          Category:
                        </label>
                        <select
                          value={updatedCategory}
                          onChange={(e) => setUpdatedCategory(e.target.value)}
                          className="w-full rounded-lg border border-gray-400 p-2 focus:ring focus:ring-cyan-500"
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
                        <label className="block text-sm font-medium">
                          Description:
                        </label>
                        <Textarea
                          value={updatedDescription}
                          onChange={(e) =>
                            setUpdatedDescription(e.target.value)
                          }
                          className="w-full border-gray-400 bg-white placeholder:text-gray-500 focus:ring focus:ring-cyan-500"
                        />
                      </div>

                      <button
                        className="rounded-lg bg-black px-4 py-3 text-white hover:bg-gray-800"
                        type="submit"
                      >
                        Save Changes
                      </button>
                    </form>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <button
              onClick={(e) => {
                removeTodo(id);
                toast.success("Todo deleted successfully");
                e.stopPropagation();
              }}
              className="text-red-600 hover:text-red-800"
            >
              <AiFillDelete />
            </button>
          </div>
        </li>
      </CollapsibleTrigger>

      <CollapsibleContent>
        <div className="mt-[-6px] rounded-b-lg border-t border-gray-400 bg-gray-50 p-3">
          <label className="block text-sm font-medium text-gray-800">
            Description:
          </label>
          <p className="mt-1 rounded-lg border border-gray-400 bg-white px-3 py-2 text-gray-600">
            {description}
          </p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default TodoItem;
