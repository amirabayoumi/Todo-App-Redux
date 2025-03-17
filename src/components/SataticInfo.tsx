import { selectStatic } from "@/store/staticSlice";
import { useSelector } from "react-redux";

const SataticInfo = () => {
  const staticInfo = useSelector(selectStatic);
  return (
    <div className="m-2 flex justify-between border-t-1 p-5 text-cyan-600">
      <p className=""> Total : {staticInfo.totalTodos} todos</p>
      <p>Active: {staticInfo.activeTodos}</p>
      <p>completed: {staticInfo.completedTodos} </p>
      <p>
        {" "}
        {((staticInfo.completedTodos / staticInfo.totalTodos) * 100).toFixed(2)}
        % completed
      </p>
    </div>
  );
};
export default SataticInfo;
