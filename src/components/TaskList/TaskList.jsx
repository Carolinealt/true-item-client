import { useSelector } from "react-redux";
import css from "./TaskList.module.css";
import { Task } from "../Task/Task";

export const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.items);
  //   const statusFilter = useSelector((state) => state.filters.status);
  //   const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
