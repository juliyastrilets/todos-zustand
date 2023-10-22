import { Checkbox } from '@/ui/checkbox';
import style from './style.module.css';

interface TodoProps {
  title: string;
  completed: boolean;
  onChange: () => void;
}

export const Todo = ({ title, completed, onChange }: TodoProps) => {
  return (
    <div className={style.todo}>
      <div className={style.checkbox}>
        <Checkbox checked={completed} onChange={onChange} />
      </div>
      <h3
        className={`${style.title} ${
          completed ? style.titleCompleted : 'style.titleDefault'
        }`}
      >
        {title}
      </h3>
    </div>
  );
};
