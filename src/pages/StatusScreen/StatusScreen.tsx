import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Header from '../../components/Header/Header';
import { PARENT, SINGLE_PARENT } from '../../constants/routes';
import { setStatus } from '../../store/actions';

const StatusScreen: FC = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleStatus = (status: string) => {
    status === 'Single' ? navigate(SINGLE_PARENT) : navigate(PARENT);

    dispatch(setStatus(status));
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <h1 className="heading-xl">So we can get to know you better, tell us about your relationship status.</h1>
        <div className="buttons">
          <Button type="fill" onClick={() => handleStatus('Single')}>
            Single
          </Button>
          <Button type="fill" onClick={() => handleStatus('Relationship')}>
            In a relationship
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StatusScreen;
