import React, { FC } from 'react';
import { ButtonProps } from './types';
import styles from './Button.module.scss';
import cn from 'classnames';

const Button: FC<ButtonProps> = ({ children, className, onClick, type, isDisabled }) => {
  return (
    <button
      className={cn(styles.button, styles[type], styles[isDisabled ? 'disabled' : ''], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
