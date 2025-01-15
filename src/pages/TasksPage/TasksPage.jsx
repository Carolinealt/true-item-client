import { useDispatch, useSelector } from "react-redux";
import css from "./TasksPage.module.css";
import { useEffect } from "react";
import { fetchTasks } from "../../redux/operations";
import { TaskList } from "../../components/TaskList/TaskList";
import TaskForm from "../../components/TaskForm/TaskForm";
import ErrorDisplay from "../../components/ErrorDisplay/ErrorDisplay";
const TasksPage = () => {
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className={css.TasksPageContainer}>
      {isLoading && <p>Loading tasks...</p>}
      {error && <ErrorDisplay message={error} />}
      <TaskForm />
      <TaskList tasks={items} />
    </div>
  );
};

export default TasksPage;
