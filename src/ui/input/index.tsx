import style from './style.module.css';

interface InputProps {
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ value, onChange }: InputProps) => {
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
