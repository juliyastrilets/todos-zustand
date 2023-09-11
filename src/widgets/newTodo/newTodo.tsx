import { Button } from "@/ui/button/button";
import style from "./newTodo.module.css";
import { FC, useState } from "react";
import { Input } from "@/ui/input/input";
import { useTodos } from "@/store/todos";

interface NewTodoProps {
  onClickClose: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const NewTodo: FC<NewTodoProps> = ({
  onClickClose,
  value,
  onChange,
  onClick,
}) => {
  return (
    <form className={style.wrapper}>
      <div className={style.header}>
        <h3 className={style.title}>Create new Todo</h3>
        <Button color="transparent" onClick={onClickClose}>
          <div>X</div>
        </Button>
      </div>
      <div className={style.content}>
        <Input value={value} onChange={onChange} />
      </div>
      <div className={style.footer}>
        <Button color="white" onClick={onClickClose}>
          <span>Cancel</span>
        </Button>
        <Button color="aqua" onClick={onClick}>
          <span>Save</span>
        </Button>
      </div>
    </form>
  );
};
