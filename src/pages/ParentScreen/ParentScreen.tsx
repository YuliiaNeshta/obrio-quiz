import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import Header from '../../components/Header/Header';
import { setChildren } from '../../store/actions';
import styles from './ParentScreen.module.scss';

const ParentScreen: FC = () => {
  const dispatch = useDispatch();

  const handleParentStatus = (isParent: boolean) => {
    dispatch(setChildren(isParent));
  };

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className="content">
        <h1 className="heading-xl">Are you a parent?</h1>
        <div className="buttons">
          <Button type="fill" onClick={() => handleParentStatus(true)}>
            Yes
          </Button>
          <Button type="fill" onClick={() => handleParentStatus(false)}>
            No
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ParentScreen;
