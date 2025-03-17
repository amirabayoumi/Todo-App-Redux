import {
  updateFilter,
  selectFilter,
  //   selectCategoryFilter,
  //   selectStatusFilter,
} from "@/store/filterSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  console.log(filter);
  //   const categoryFilter = useSelector(selectCategoryFilter);
  //   const statusFilter = useSelector(selectStatusFilter);

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.id === "category") {
      dispatch(updateFilter({ categoryFilter: e.target.value }));
    } else if (e.target.id === "status") {
      dispatch(updateFilter({ statusFilter: e.target.value }));
    }
  };
  return (
    <div className="my-5 flex items-center gap-2">
      {" "}
      <select
        className="rounded-lg border border-slate-400 p-3 px-6 text-slate-600"
        id="category"
        onChange={handleOnChange}
      >
        <option value="all">All Categories</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Shopping">Shopping</option>
        <option value="Health">Health</option>
        <option value="Learning">Learning</option>
      </select>
      <select
        className="rounded-lg border border-slate-400 p-3 px-6 text-slate-600"
        id="status"
        onChange={handleOnChange}
      >
        <option value="all">All Status</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
}
