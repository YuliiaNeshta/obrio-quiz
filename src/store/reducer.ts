import { createReducer } from '@reduxjs/toolkit';
import {
  setAge,
  setChildren,
  setDateOfBirth,
  setDecision,
  setGender,
  setSingleParent,
  setStatus,
  setZodiac,
} from './actions';
import { UserInfoStateProps } from './types';

const userInfoState: UserInfoStateProps = {
  gender: '',
  dateOfBirth: '',
  age: '',
  zodiac: '',
  children: false,
  singleParent: false,
  status: '',
  decision: '',
};

const userInfoReducer = createReducer(userInfoState, {
  [setGender.type]: (state, action) => {
    state.gender = action.payload;
  },
  [setDateOfBirth.type]: (state, action) => {
    state.dateOfBirth = action.payload;
  },
  [setAge.type]: (state, action) => {
    state.age = action.payload;
  },
  [setZodiac.type]: (state, action) => {
    state.zodiac = action.payload;
  },
  [setChildren.type]: (state, action) => {
    state.children = action.payload;
  },
  [setStatus.type]: (state, action) => {
    state.status = action.payload;
  },
  [setSingleParent.type]: (state, action) => {
    state.singleParent = action.payload;
  },
  [setDecision.type]: (state, action) => {
    state.decision = action.payload;
  },
});

export default userInfoReducer;
