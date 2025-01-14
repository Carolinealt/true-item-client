import clsx from "clsx";
import css from "./Button.module.css";

const Button = ({ variant, children }) => {
  return <button className={clsx(css[variant])}>{children}</button>;
};

export default Button;
