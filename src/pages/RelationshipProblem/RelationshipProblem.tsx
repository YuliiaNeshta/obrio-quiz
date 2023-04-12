import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Header from '../../components/Header/Header';
import { DECISION } from '../../constants/routes';
import { UserInfoStateProps } from '../../store/types';

const RelationshipProblem: FC = () => {
  const { gender, children, age } = useSelector((state: { userInfo: UserInfoStateProps }) => state.userInfo);
  const navigate = useNavigate();

  const nextQuestion = () => {
    navigate(DECISION);
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <h1 className="heading-xl">
          {gender === 'Male' ? 'Man' : 'Woman'} {age} years {children ? 'who have children' : ''} need a slightly
          different approach to improve their relationship. Which statement best describes you?
        </h1>
        <div className="buttons">
          <Button type="fill" onClick={nextQuestion}>
            I’m very unhappy with how things are going in my relationship
          </Button>
          <Button type="fill" onClick={nextQuestion}>
            I’m unhappy with parts of my relationship, but some things are working well
          </Button>
          <Button type="fill" onClick={nextQuestion}>
            I’m generally happy in my relationship
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RelationshipProblem;
