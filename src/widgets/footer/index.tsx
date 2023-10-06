import { Button } from "@/ui/button";
import style from "./style.module.css";
import { FC } from "react";
import { useTodos } from "@/store/todos";

interface FooterProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Footer: FC<FooterProps> = ({ onClick }) => {
  const count = useTodos((state) => state.todos.length);
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.wrapperText}>
          <span className={style.text}> Total:{count}</span>
        </div>
        <Button color="aqua" onClick={onClick}>
          <span>Add new todo </span>
        </Button>
      </div>
    </div>
  );
};
