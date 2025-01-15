import clsx from "clsx";
import css from "./Button.module.css";

const Button = ({ variant, onClick, children }) => {
  return <button className={clsx(css[variant])} onClick={onClick}>{children}</button>;
};

export default Button;
