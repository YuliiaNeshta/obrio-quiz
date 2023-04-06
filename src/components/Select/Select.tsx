import React, { FC, useState } from 'react';
import styles from './Select.module.scss';
import { CustomSelectProps } from './types';
import { ReactComponent as SelectArrow } from '../../assets/arrow-down.svg';

const CustomSelect: FC<CustomSelectProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className={styles.select}>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
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
