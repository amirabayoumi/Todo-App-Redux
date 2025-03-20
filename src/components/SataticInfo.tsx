import { selectStatic } from "@/store/staticSlice";
import { useSelector } from "react-redux";

const StaticInfo = () => {
  const staticInfo = useSelector(selectStatic);
  const completionRate =
    staticInfo.totalTodos > 0
      ? ((staticInfo.completedTodos / staticInfo.totalTodos) * 100).toFixed(2)
      : "0.00";

  return (
    <div className="m-2 flex flex-col items-center gap-4 border-t border-slate-400 p-5 text-slate-400 sm:grid sm:grid-cols-2 md:grid-cols-4">
      <p className="text-center font-medium">
        Total: <span className="font-bold">{staticInfo.totalTodos}</span> todos
      </p>
      <p className="text-center font-medium">
        Active: <span className="font-bold">{staticInfo.activeTodos}</span>
      </p>
      <p className="text-center font-medium">
        Completed:{" "}
        <span className="font-bold">{staticInfo.completedTodos}</span>
      </p>
      <p className="text-center font-medium">
        Progress: <span className="font-bold">{completionRate}%</span> completed
      </p>
    </div>
  );
};

export default StaticInfo;
