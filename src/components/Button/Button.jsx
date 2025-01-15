import clsx from "clsx";
import css from "./Button.module.css";

const Button = ({ variant, onClick, children, type, position }) => {
  return <button className={clsx(css[variant], position && css[position])} onClick={onClick} type={type}>{children}</button>;
};

export default Button;
