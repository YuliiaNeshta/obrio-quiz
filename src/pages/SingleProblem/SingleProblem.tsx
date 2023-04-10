import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { DECISION } from '../../constants/routes';
import { StateProps } from '../../store/types';
import styles from './SingleProblem.module.scss';

const SingleProblem: FC = () => {
  const { gender, age, children } = useSelector((state: StateProps) => state.userInfo);
  const navigate = useNavigate();

  const nextQuestion = () => {
    navigate(DECISION);
  };

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className="content">
        <h1 className="heading-xl">
          Single {gender === 'Male' ? 'man' : 'woman'} {age} years {children ? 'who have children' : ''} need a slightly
          different approach to find their perfect partner. But first, how did you feel in your last relationship?
        </h1>
        <div className="buttons">
          <Button type="fill" onClick={nextQuestion}>
            I was unhappy with low things were going in my relationship
          </Button>
          <Button type="fill" onClick={nextQuestion}>
            I was unhappy with parts of my relationship, but some thing were working
          </Button>
          <Button type="fill" onClick={nextQuestion}>
            I was generally happy with my relationship
          </Button>
          <Button type="fill" onClick={nextQuestion}>
            I’ve never been in a relationship
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleProblem;
