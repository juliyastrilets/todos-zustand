import { FC } from "react";
import style from "./todo.module.css";
import { useTodos } from "@/store/todos";

interface TodoPropds {
  title: string;
  completed: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Todo: FC<TodoPropds> = ({ title, completed, onChange }) => {
  return (
    <label className={style.wrapper}>
      <input
        className={style.input}
        type="checkbox"
        checked={completed}
        onChange={onChange}
      />

      <div className={style.title}>{title}</div>
    </label>
  );
};
