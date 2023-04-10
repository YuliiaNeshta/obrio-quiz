import React, { FC, useState } from 'react';
// @ts-ignore
import { ReactComponent as SelectArrow } from '../../assets/arrow-down.svg';
import styles from './Select.module.scss';
import { CustomSelectProps } from './types';

const CustomSelect: FC<CustomSelectProps> = ({ options, placeholder, onChange }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelectedOption(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className={styles.selectWrapper}>
      <select className={styles.select} value={selectedOption} onChange={handleOptionChange}>
        <option className={styles.option} value="">
          {placeholder}
        </option>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span className={styles.selectArrow}>
        <SelectArrow />
      </span>
    </div>
  );
};

export default CustomSelect;
