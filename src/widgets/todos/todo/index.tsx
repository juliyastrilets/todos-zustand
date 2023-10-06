import { FC } from "react";
import style from "./style.module.css";

interface TodoPropds {
  title: string;
  completed: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Todo: FC<TodoPropds> = ({ title, completed, onChange }) => {
  return (
    <label className={style.label}>
      <div>
        <input
          className={style.input}
          type="checkbox"
          checked={completed}
          onChange={onChange}
        />
        <div className={style.checkbox}></div>
      </div>
      <h3 className={style.title}>{title}</h3>
    </label>
  );
};
