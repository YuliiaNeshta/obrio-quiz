import React, { FC, useState } from 'react';
import styles from './Input.module.scss';
import { InputProps } from './types';

const Input: FC<InputProps> = ({ placeholder, type = 'text', onValidate }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);

    if (type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      onValidate(emailRegex.test(event.target.value));
    }
  };

  return (
    <input
      value={inputValue}
      type={type}
      onChange={handleChange}
      placeholder={placeholder}
      className={styles.input}
    ></input>
  );
};

export default Input;
