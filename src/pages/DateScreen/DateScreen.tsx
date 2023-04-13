import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Select from '../../components/Select';
import { LAST_DAY_OF_SIGN, MONTHS, ZODIAC_SIGNS } from '../../constants/data';
import { DATA_LOADING } from '../../constants/routes';
import { setAge, setDateOfBirth, setZodiac } from '../../store/actions';
import styles from './DateScreen.module.scss';

const DateScreen: FC = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const birthYears = [];
  const currentYear = new Date().getFullYear();

  for (let year = currentYear - 100; year <= currentYear - 10; year++) {
    birthYears.push(year);
  }

  const daysInMonth = Array.from({ length: 31 }, (_, index) => index + 1);

  const calculateZodiacSign = (day: number, month: string) => {
    const monthIndex = MONTHS.indexOf(month);
    const zodiacIndex = day > LAST_DAY_OF_SIGN[monthIndex] ? monthIndex + 1 : monthIndex;
    const zodiacSign = ZODIAC_SIGNS[zodiacIndex];

    return zodiacSign;
  };

  const getAge = (day: number, month: string, year: number) => {
    const birthDate = new Date(`${month} ${day}, ${year}`);
    const now = new Date();
    let age = now.getFullYear() - birthDate.getFullYear();
    if (
      now.getMonth() < birthDate.getMonth() ||
      (now.getMonth() === birthDate.getMonth() && now.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const handleSelectChangeDay = (value: number) => {
    setSelectedDay(value);
  };
  const handleSelectChangeMonth = (value: string) => {
    setSelectedMonth(value);
  };

  const handleSelectChangeYear = (value: number) => {
    setSelectedYear(value);
  };

  useEffect(() => {
    dispatch(setZodiac(calculateZodiacSign(selectedDay, selectedMonth)));
    dispatch(setDateOfBirth(`${selectedDay} ${selectedMonth} ${selectedYear}`));
    dispatch(setAge(getAge(selectedDay, selectedMonth, selectedYear)));
  }, [selectedDay, selectedMonth, selectedYear]);

  const nextQuestion = () => {
    navigate(DATA_LOADING);
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <h1 className={styles.heading}>What’s your date of birth?</h1>
        <div className={styles.selects}>
          <Select options={MONTHS} placeholder="Month" onChange={handleSelectChangeMonth} />
          <Select options={daysInMonth} placeholder="Day" onChange={handleSelectChangeDay} />
          <Select options={birthYears} placeholder="Year" onChange={handleSelectChangeYear} />
        </div>

        {(!selectedDay || !selectedMonth || !selectedYear) && (
          <p className={styles.errorText}>Select your birth date!</p>
        )}
        <Button
          type="gradient"
          className={styles.button}
          onClick={nextQuestion}
          isDisabled={!selectedDay || !selectedMonth || !selectedYear}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default DateScreen;
