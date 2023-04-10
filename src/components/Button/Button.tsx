import cn from 'classnames';
import React, { FC } from 'react';
import styles from './Button.module.scss';
import { ButtonProps } from './types';

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
