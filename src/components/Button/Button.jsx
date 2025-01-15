import clsx from "clsx";
import css from "./Button.module.css";

const Button = ({ variant, onClick, children, type }) => {
  return <button className={clsx(css[variant])} onClick={onClick} type={type}>{children}</button>;
};

export default Button;
