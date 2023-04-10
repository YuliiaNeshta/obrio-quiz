import { createReducer } from '@reduxjs/toolkit';
import {
  setGender,
  setDateOfBirth,
  setAge,
  setZodiac,
  setChildren,
  setStatus,
  setDecision,
  setSingleParent,
} from './actions';

const userInfoState = {
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
  [setGender]: (state, action) => {
    state.gender = action.payload;
  },
  [setDateOfBirth]: (state, action) => {
    state.dateOfBirth = action.payload;
  },
  [setAge]: (state, action) => {
    state.age = action.payload;
  },
  [setZodiac]: (state, action) => {
    state.zodiac = action.payload;
  },
  [setChildren]: (state, action) => {
    state.children = action.payload;
  },
  [setStatus]: (state, action) => {
    state.status = action.payload;
  },
  [setSingleParent]: (state, action) => {
    state.singleParent = action.payload;
  },
  [setDecision]: (state, action) => {
    state.decision = action.payload;
  },
});

export default userInfoReducer;
