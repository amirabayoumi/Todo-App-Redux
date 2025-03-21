import { useAddTodoMutation } from "../store/todoApi";
import { useState } from "react";
import { toast } from "sonner"; // Import toast for better UX
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
    if (!category) {
      setError("Please select a category");
      toast.error("Please select a category");
      return;
    }

    setError("");
    addTodo({ text, category });

    toast.success("Todo added successfully!");
  };

  return (
    <form
      action={addNewTodo}
      className={`my-10 flex w-full flex-col gap-4 rounded-lg border px-4 py-3 sm:flex-row ${
        error ? "border-red-500" : "border-gray-400"
      }`}
    >
      <div className="w-full">
        <Input
          type="text"
          name="text"
          placeholder="Add a new todo"
          minLength={3}
        />

        {/* <input
          type="text"
          name="text"
          className={`w-full rounded-lg border px-4 py-3 ${
            error ? "border-red-500" : "border-gray-400"
          }`}
          placeholder="Add a new todo"
          minLength={3}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>} */}
      </div>
      {/* <select
        name="category"
        className="w-full min-w-[120px] rounded-lg border border-gray-400 p-2 sm:w-auto"
      >
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Shopping">Shopping</option>
        <option value="Health">Health</option>
        <option value="Learning">Learning</option>
      </select> */}
      <div>
        <Select name="category">
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Work">Work</SelectItem>
            <SelectItem value="Personal">Personal</SelectItem>
            <SelectItem value="Shopping">Shopping</SelectItem>
            <SelectItem value="Health">Health</SelectItem>
            <SelectItem value="Learning">Learning</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* <button className="w-full min-w-[120px] rounded-lg border bg-black px-4 py-3 text-white sm:w-auto">
        + Add
      </button> */}
      <Button> + Add</Button>{" "}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </form>
  );
};

export default TodoForm;
