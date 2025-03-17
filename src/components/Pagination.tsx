import { updatePage } from "@/store/paginationSlice";
import { useDispatch } from "react-redux";
const Pagination = () => {
  const dispatch = useDispatch();
  return (
    <div className="my-5 flex items-center gap-2">
      <label htmlFor="page">Show</label>
      <select
        id="page"
        className="form-select rounded-lg border border-slate-400 p-3 px-6 text-slate-600"
        onChange={(e) => dispatch(updatePage(parseInt(e.target.value)))}
      >
        {" "}
        <option value="4">4 per page</option>
        <option value="8">8 per page</option>
        <option value="12">12 per page</option>
      </select>
    </div>
  );
};
export default Pagination;
