import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Header from '../../components/Header/Header';
import { PARTNER_PROBLEM } from '../../constants/routes';
import { setChildren } from '../../store/actions';
import styles from './ParentScreen.module.scss';

const ParentScreen: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleParentStatus = (isParent: boolean) => {
    navigate(PARTNER_PROBLEM);
    dispatch(setChildren(isParent));
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <h1 className="heading-xl">Are you a parent?</h1>
        <div className={styles.buttons}>
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
