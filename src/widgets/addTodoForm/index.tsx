import style from './style.module.css';
import { Button } from '@/ui/button';
import { Input } from '@/ui/input';
import Image from 'next/image';

interface AddTodoFormProps {
  onClickClose: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const AddTodoForm = ({
  onClickClose,
  value,
  onChange,
  onClick,
  onSubmit,
}: AddTodoFormProps) => {
  return (
    <form className={style.wrapper} onSubmit={onSubmit}>
      <div className={style.header}>
        <h2 className={style.title}>Create new Todo</h2>
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
