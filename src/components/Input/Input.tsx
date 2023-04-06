import React, { FC, useState } from 'react';
import styles from './Input.module.scss';

interface InputProps {
  placeholder: string;
}
const Input: FC<InputProps> = ({ placeholder }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <input
      value={inputValue}
      onChange={e => setInputValue(e.target.value)}
      placeholder={placeholder}
      className={styles.input}
    ></input>
  );
};

export default Input;
