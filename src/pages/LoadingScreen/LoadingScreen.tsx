import React, { FC, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { TIMEOUT } from '../../constants/data';
import { STATUS } from '../../constants/routes';
import { UserInfoStateProps } from '../../store/types';
import styles from './LoadingScreen.module.scss';

const LoadingScreen: FC = () => {
  const timerIdRef = useRef<number>();
  const { zodiac, gender } = useSelector((state: { userInfo: UserInfoStateProps }) => state.userInfo);
  const navigate = useNavigate();

  useEffect(() => {
    timerIdRef.current = setTimeout(() => {
      navigate(STATUS);
    }, TIMEOUT);

    return () => {
      clearTimeout(timerIdRef.current);
    };
  }, []);

  return (
    <div className="wrapper gradient">
      <Header color="white" />
      <div className="content">
        <h1 className="heading-xl white">
          We've helped 2,865,756* other {zodiac} {gender === 'Male' ? 'man' : 'woman'} to find their perfect partner and
          we can't wait to help you too!
        </h1>
        <p className={styles.subtitle}>*as of 24 February 2023</p>
        <p className={styles.connectText}>Connecting to database...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
