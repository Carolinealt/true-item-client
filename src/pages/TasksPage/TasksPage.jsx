import { useDispatch, useSelector } from "react-redux";
import css from "./TasksPage.module.css";
import { useEffect } from "react";
import { fetchTasks } from "../../redux/operations";
import { TaskList } from "../../components/TaskList/TaskList";
const TasksPage = () => {
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <TaskList />
    </div>
  );
};

export default TasksPage;
