import { useDispatch } from "react-redux";
import css from "./Task.module.css";
import { deleteTask, toggleCompleted } from "../../redux/operations";
import Button from "../Button/Button";
import dateParser from "../../utils/dateParser";
import { HiCheck } from "react-icons/hi";
import { useId } from "react";

export const Task = ({ task }) => {
  const { time, date } = dateParser(task.updatedAt)
  const checkId = useId();

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task._id));

  const handleToggle = () => dispatch(toggleCompleted(task));

  return (
    <div className={css.wrapper}>
      <label htmlFor={checkId}>
        <input
          type="checkbox"
          id={checkId}
          className={css.checkbox}
          checked={task.completed}
          onChange={handleToggle}
        />
        <span className={css.containerCheckbox}>
          <HiCheck className={css.checkIcon} />
        </span>
      </label>

      <Button variant="small" onClick={handleDelete} position="absolute"></Button>

      <div className={css.textContainer}>
        <p className={css.text}>{task.text}</p>
      </div>

      <div className={css.dateContainer}>
        <span className={css.date}>{time} </span>
        <br />
        <span className={css.date}>{date}</span>
      </div>
    </div>
  );
};
