import { FC } from "react";
import style from "./input.module.css";
interface InputProps {
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({ value, onChange }) => {
  return (
    <input
      className={style.wrapper}
      placeholder="Type here ..."
      value={value}
      onChange={onChange}
      required
    />
  );
};
