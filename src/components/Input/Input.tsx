import React, { FC, useState } from 'react';
import styles from './Input.module.scss';

interface InputProps {
  placeholder: string;
  type: 'email' | 'number' | 'text';
  onValidate: (arg0: boolean) => void;
}
const Input: FC<InputProps> = ({ placeholder, type = 'text', onValidate }) => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.target.value);

    if (type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      onValidate(emailRegex.test(event.target.value));
    }
  };

  return (
    <input value={value} type={type} onChange={handleChange} placeholder={placeholder} className={styles.input}></input>
  );
};

export default Input;
