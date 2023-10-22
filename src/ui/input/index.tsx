import style from './style.module.css';

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ ...extendProps }: InputProps) => {
  return <input className={style.input} {...extendProps} />;
};
