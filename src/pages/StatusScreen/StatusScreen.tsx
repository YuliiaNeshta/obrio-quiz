import React, { FC } from 'react';
import Button from '../../components/Button';
import styles from './StatusScreen.module.scss';

const StatusScreen: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className="content">
        <h1 className="heading-xl">So we can get to know you better, tell us about your relationship status.</h1>
        <div className="buttons">
          <Button type="fill">Single</Button>
          <Button type="fill">In a relationship</Button>
        </div>
      </div>
    </div>
  );
};

export default StatusScreen;
