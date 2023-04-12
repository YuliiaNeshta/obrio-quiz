import React, { FC, useState } from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header/Header';
import Input from '../../components/Input';
import styles from './Email.module.scss';

const Email: FC = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <h1 className="heading-xl">Enter your email to see how you can grow with Nebula</h1>
        <Input placeholder="Your email" type="email" onValidate={setIsEmailValid} />
        {!isEmailValid && <p className={styles.errorText}>Email is not valid!</p>}
        <p className={styles.description}>
          *Nebula does not share any personal information. We'll email you a copy of your program for convenient access.
        </p>
        <p className={styles.footerText}>
          By continuing I agree with
          <a href="https://asknebula.com/app/privacy-policy" target="_blank" className={styles.link} rel="noreferrer">
            {' '}
            Privacy police{' '}
          </a>{' '}
          and{' '}
          <a href="https://asknebula.com/app/terms" target="_blank" className={styles.link} rel="noreferrer">
            {' '}
            Terms of use{' '}
          </a>
        </p>
        <Button type="gradient" className={styles.button} isDisabled={!isEmailValid}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Email;
