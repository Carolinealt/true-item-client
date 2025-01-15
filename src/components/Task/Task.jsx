import { useDispatch } from "react-redux";
import css from "./Task.module.css";
import { deleteTask, toggleCompleted } from "../../redux/operations";
import Button from "../Button/Button";
import dateParser from "../../utils/dateParser";

export const Task = ({ task }) => {
  const { time, date } = dateParser(task.updatedAt)
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task._id));

  const handleToggle = () => dispatch(toggleCompleted(task));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />
        <Button variant="small" onClick={handleDelete}></Button>
      <p className={css.text}>{task.text}</p>
      <span>{time}</span>
      <span>{date}</span>
    </div>
  );
};
