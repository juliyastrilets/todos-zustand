import style from './style.module.css';

interface TodoProps {
  title: string;
  completed: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Todo = ({ title, completed, onChange }: TodoProps) => {
  return (
    <label className={style.label}>
      <input
        className={style.input}
        type="checkbox"
        checked={completed}
        onChange={onChange}
      />
      <div className={style.checkbox}></div>
      <h3 className={style.title}>{title}</h3>
    </label>
  );
};
