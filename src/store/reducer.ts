import { createReducer, PayloadAction } from '@reduxjs/toolkit';
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
  age: 0,
  zodiac: '',
  children: false,
  singleParent: false,
  status: '',
  decision: '',
};

const userInfoReducer = createReducer(userInfoState, {
  [setGender.type]: (state, action: PayloadAction<string>) => {
    state.gender = action.payload;
  },
  [setDateOfBirth.type]: (state, action: PayloadAction<string>) => {
    state.dateOfBirth = action.payload;
  },
  [setAge.type]: (state, action: PayloadAction<number>) => {
    state.age = action.payload;
  },
  [setZodiac.type]: (state, action: PayloadAction<string>) => {
    state.zodiac = action.payload;
  },
  [setChildren.type]: (state, action: PayloadAction<boolean>) => {
    state.children = action.payload;
  },
  [setStatus.type]: (state, action: PayloadAction<string>) => {
    state.status = action.payload;
  },
  [setSingleParent.type]: (state, action: PayloadAction<boolean>) => {
    state.singleParent = action.payload;
  },
  [setDecision.type]: (state, action: PayloadAction<string>) => {
    state.decision = action.payload;
  },
});
export default userInfoReducer;
