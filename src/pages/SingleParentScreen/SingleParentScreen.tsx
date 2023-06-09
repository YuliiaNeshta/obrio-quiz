import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Header from '../../components/Header/Header';
import { PARTNER_PROBLEM, SINGLE_PROBLEM } from '../../constants/routes';
import { setChildren } from '../../store/actions';

const SingleParentScreen: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSingleParent = (isSingleParent: boolean) => {
    if (isSingleParent) {
      navigate(SINGLE_PROBLEM);
    } else {
      navigate(PARTNER_PROBLEM);
    }
    dispatch(setChildren(isSingleParent));
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <h1 className="heading-xl">Are you a single parent?</h1>
        <div className="buttons">
          <Button type="fill" onClick={() => handleSingleParent(true)}>
            Yes
          </Button>
          <Button type="fill" onClick={() => handleSingleParent(false)}>
            No
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleParentScreen;
