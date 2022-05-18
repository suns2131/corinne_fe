/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getUserInfo, signUp, getUserBalance, getUserTransaction, changeImage } from './thunk';

const initialState = {
  name: '',
  isFirstLogin: false,
  status: 'fail',
  userInfo: null,
  userBalance: null,
  userTransaction: null,
};

const { actions, reducer } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, { payload }) => ({
      ...state,
      name: payload,
    }),
    isFirstLogin: (state, { payload }) => ({
      ...state,
      isFirstLogin: payload,
    }),
    initializeLoginStatus: (state, { payload }) => ({
      ...state,
      status: payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      state.status = payload.status;
      state.userInfo = {
        ...state.userInfo,
        nickname: payload.nickname,
      };
    });
    builder.addCase(changeImage.fulfilled, (state, { payload }) => {
      state.userInfo = {
        ...state.userInfo,
        imageUrl: payload.imageUrl,
      };
    });
    builder.addCase(getUserInfo.fulfilled, (state, { payload }) => ({
      ...state,
      userInfo: payload,
    }));
    builder.addCase(getUserBalance.fulfilled, (state, { payload }) => ({
      ...state,
      userBalance: payload,
    }));
    builder.addCase(getUserTransaction.fulfilled, (state, { payload }) => ({
      ...state,
      userTransaction: payload,
    }));
  },
});

export const { login, isFirstLogin, initializeLoginStatus } = actions;

export default reducer;
