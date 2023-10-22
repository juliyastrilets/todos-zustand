import React from 'react';
import style from './style.module.css';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | JSX.Element | JSX.Element[];
  kind: 'primary' | 'default';
}

export const Button = ({
  children,
  kind,
  ...extendProps
}: ButtonProps) => {
  return (
    <button
      {...extendProps}
      className={`${style.button} ${style[kind]}`}
    >
      {children}
    </button>
  );
};
