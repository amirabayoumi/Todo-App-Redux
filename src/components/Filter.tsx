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
    <div className="my-5 flex w-full flex-wrap items-center gap-4">
      <select
        className="w-full rounded-lg border border-slate-400 bg-white p-3 px-6 text-slate-600 transition-all duration-200 hover:bg-slate-100 focus:ring-2 focus:ring-slate-300 sm:w-auto"
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
        className="w-full rounded-lg border border-slate-400 bg-white p-3 px-6 text-slate-600 transition-all duration-200 hover:bg-slate-100 focus:ring-2 focus:ring-slate-300 sm:w-auto"
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
