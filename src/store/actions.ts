import { createAction } from '@reduxjs/toolkit';

export const setGender = createAction<string>('userInfo/setGender');
export const setDateOfBirth = createAction<string>('userInfo/setDateOfBirth');
export const setAge = createAction<number>('userInfo/setAge');
export const setZodiac = createAction<string>('userInfo/setZodiac');
export const setChildren = createAction<boolean>('userInfo/setChildren');
export const setStatus = createAction<string>('userInfo/setStatus');
export const setSingleParent = createAction<boolean>('userInfo/setSingleParent');
export const setDecision = createAction<string>('userInfo/setDecision');
