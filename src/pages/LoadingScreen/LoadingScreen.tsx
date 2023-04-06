import React, { FC } from 'react';
import styles from './LoadingScreen.module.scss';

const LoadingScreen: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className="content">
        <h1 className="heading-xl">
          We've helped 2,865,756* other Zodiac gender to find their perfect partner and we can't wait to help you too!
        </h1>
        <p className={styles.subtitle}>*as of 24 February 2023</p>
        <p className={styles.connectText}>Connecting to database...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
