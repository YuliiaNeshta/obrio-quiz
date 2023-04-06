import React, { FC } from 'react';
import Input from '../../components/Input';
import { FirstScreenProps } from './types';
import styles from './FirstScreen.module.scss';

const FirstScreen: FC<FirstScreenProps> = ({ onClick }) => {
  return (
    <div className="content">
      <h1 className="heading-xl">Understand Yourself and Improve Relationships With Astrology</h1>
      <span className={styles.subtitle}>1-Minute Personal Assessment</span>

      <h2 className={styles.question}>Select your gender:</h2>
      <div className={styles.buttonsContainer}></div>
      <Input placeholder="Your email" />
      <div className={styles.footerContainer}>
        <p className={styles.footerText}>
          By continuing I agree with <a>Privacy policy</a> and <a>Terms of use</a>.
        </p>
        <p className={styles.footerText}>Obrio Limited, Athalassas, 62, MEZZANINE, Strovolos, 2012, Nicosia, Cyprus</p>
      </div>
    </div>
  );
};

export default FirstScreen;
