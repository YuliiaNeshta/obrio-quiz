import React, { FC } from 'react';
import Select from '../../components/Select/Select';
import { DAYS_IN_MONTH, MONTHS } from '../../constants/constants';
import styles from './DateScreen.module.scss';

const DateScreen: FC<DateScreenProps> = ({ onClick }) => {
  const birthYears = [];
  const currentYear = new Date().getFullYear();

  for (let year = currentYear - 100; year <= currentYear - 10; year++) {
    birthYears.push(year);
  }

  const daysInMonth = Array.from({ length: 31 }, (_, index) => index + 1);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>What’s your date of birth?</h1>
      <Select options={MONTHS} />
      <Select options={daysInMonth} />
      <Select options={birthYears} />
    </div>
  );
};

export default DateScreen;
