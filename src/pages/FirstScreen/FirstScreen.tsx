import React, { FC } from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { DATE } from '../../constants/routes';
import { setGender } from '../../store/actions';
import { FirstScreenProps } from './types';
import styles from './FirstScreen.module.scss';
import { ReactComponent as Male } from '../../assets/male.svg';
import { ReactComponent as Female } from '../../assets/female.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrow.svg';

const FirstScreen: FC<FirstScreenProps> = ({ onClick }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleGenderSelect = (gender: string) => {
    dispatch(setGender(gender));
    navigate(DATE);
  };

  return (
    <>
      <Header isFirstPage={true} />
      <div className="content">
        <h1 className="heading-xl">Understand Yourself and Improve Relationships With Astrology</h1>
        <span className={styles.subtitle}>1-Minute Personal Assessment</span>

        <h2 className={styles.question}>Select your gender:</h2>

        <div className={styles.buttonsContainer}>
          <button className={styles.button} onClick={() => handleGenderSelect('Male')}>
            <Male />
            <span className={styles.buttonText}>
              Male
              <ArrowRight />
            </span>
          </button>
          <button className={styles.button} onClick={() => handleGenderSelect('Female')}>
            <Female />
            <span className={cn(styles.buttonText, styles.gradient)}>
              Female
              <ArrowRight />
            </span>
          </button>
        </div>
        <div className={styles.footerContainer}>
          <p className={styles.footerText}>
            By continuing I agree with{' '}
            <a className={styles.link} href="https://asknebula.com/app/privacy-policy" target="_blank">
              {' '}
              Privacy policy{' '}
            </a>{' '}
            and{' '}
            <a className={styles.link} href="https://asknebula.com/app/terms" target="_blank">
              Terms of use
            </a>
          </p>
          <p className={styles.footerText}>
            Obrio Limited, Athalassas, 62, MEZZANINE, Strovolos, 2012, Nicosia, Cyprus
          </p>
        </div>
      </div>
    </>
  );
};

export default FirstScreen;
