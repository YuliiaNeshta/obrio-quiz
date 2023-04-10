import { configureStore } from '@reduxjs/toolkit';
import userInfoReducer from './reducer';

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
  },
});

export default store;
