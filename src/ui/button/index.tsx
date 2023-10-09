import style from './style.module.css';

interface ButtonProps {
  children: string | JSX.Element | JSX.Element[];
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  color: string;
  disabled?: any;
}

export const Button = ({
  children,
  onClick,
  color,
  disabled,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`${style.wrapper} ${style[color]}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};
