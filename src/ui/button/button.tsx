import { FC } from "react";
import style from "./button.module.css";

interface ButtonProps {
  children: string | JSX.Element | JSX.Element[];
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  color: string;
  disabled?: any;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  color,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      className={`${style.wrapper} ${style[color]}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};
