import css from "./TaskList.module.css";
import { Task } from "../Task/Task";

export const TaskList = ({ tasks }) => {


  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li className={css.listItem} key={`${task._id}${Math.random()}`}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
