import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Balance } from '../../assets/balance.svg';
import { ReactComponent as Brain } from '../../assets/brain.svg';
import { ReactComponent as Heart } from '../../assets/heart.svg';
import Button from '../../components/Button';
import Header from '../../components/Header/Header';
import { EMAIL } from '../../constants/routes';
import { UserInfoStateProps } from '../../store/types';
import styles from './VisualDecision.module.scss';

const StatusScreen: FC = () => {
  const { decision, zodiac } = useSelector((state: { userInfo: UserInfoStateProps }) => state.userInfo);
  const navigate = useNavigate();

  let decisionScreen;

  switch (decision) {
    case 'Heart':
      decisionScreen = (
        <>
          <Heart />
          <p>
            Based on our data, 49% of {zodiac} people also make decisions with their heart. But don't worry, we'll
            consider that while creating your guidance plan.
          </p>
        </>
      );
      break;
    case 'Head':
      decisionScreen = (
        <>
          <Brain />
          <p>
            Based on our data, 39% of {zodiac} people also make decisions with their head. But don't worry, we'll
            consider that while creating your guidance plan.
          </p>
        </>
      );
      break;
    case 'Both':
      decisionScreen = (
        <>
          <Balance />
          <p>
            Wonderful! Based on our data, only the top 17% of {zodiac} people make decisions with their heart and head.
            Using both in equal measure is the key to feeling harmonious in your relationships.
          </p>
        </>
      );
      break;
    default:
      decisionScreen = <p>No data available.</p>;
  }

  const nextScreen = () => {
    navigate(EMAIL);
  };

  return (
    <div className="wrapper gradient">
      <Header color="white" />
      <div className="content">
        {decisionScreen}
        <div className={styles.buttons}>
          <Button type="bordered" onClick={() => navigate(-1)}>
            Back
          </Button>
          <Button type="white" onClick={nextScreen}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StatusScreen;
