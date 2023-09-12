import { Button } from "@/ui/button/button";
import style from "./addTodoForm.module.css";
import { FC } from "react";
import { Input } from "@/ui/input/input";
import Image from "next/image";

interface AddTodoFormProps {
  onClickClose: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const AddTodoForm: FC<AddTodoFormProps> = ({
  onClickClose,
  value,
  onChange,
  onClick,
  onSubmit,
}) => {
  return (
    <form className={style.wrapper} onSubmit={onSubmit}>
      <div className={style.header}>
        <h3 className={style.title}>Create new Todo</h3>
        <Button color="transparent" onClick={onClickClose}>
          <Image src="/close.svg" alt="icon" width={16} height={16} />
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
