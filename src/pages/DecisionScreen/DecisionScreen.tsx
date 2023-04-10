import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Header from '../../components/Header/Header';
import { DECISION_VISUAL } from '../../constants/routes';
import { setDecision } from '../../store/actions';
import styles from './DecisionScreen.module.scss';

const DecisionScreen: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDecisionType = (type: string) => {
    dispatch(setDecision(type));
    navigate(DECISION_VISUAL);
  };

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className="content">
        <h1 className="heading-xl">Do you make decisions with your head or your heart?</h1>
        <div className="buttons">
          <Button type="fill" onClick={() => handleDecisionType('Heart')}>
            Heart
          </Button>
          <Button type="fill" onClick={() => handleDecisionType('Head')}>
            Head
          </Button>
          <Button type="fill" onClick={() => handleDecisionType('Both')}>
            Both
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DecisionScreen;
