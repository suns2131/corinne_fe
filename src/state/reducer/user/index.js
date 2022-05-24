/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import {
  getUserInfo,
  signUp,
  getUserBalance,
  getUserTransaction,
  changeImage,
  postResetBalance,
  getTargetTransaction,
} from './thunk';

const initialState = {
  name: '',
  isFirstLogin: false,
  status: 'fail',
  resetStatus: false,
  userInfo: null,
  userBalance: null,
  userTransaction: null,
  targetTransaction: null,
  eventModal: false,
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
    setResetStatus: (state, { payload }) => ({
      ...state,
      resetStatus: payload,
    }),
    setEventModal: (state, { payload }) => ({
      ...state,
      eventModal: payload,
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
    builder.addCase(signUp.rejected, (state, { payload }) => {
      console.log(payload);
    });
    builder.addCase(postResetBalance.fulfilled, (state, { payload }) => ({
      ...state,
      resetStatus: payload,
    }));
    builder.addCase(changeImage.fulfilled, (state, { payload }) => {
      state.userInfo = {
        ...state.userInfo,
        imageUrl: payload.imageUrl,
      };
    });
    builder.addCase(getUserInfo.fulfilled, (state, { payload }) => ({
      ...state,
      userInfo: payload,
      isFirstLogin: payload.firstLogin,
    }));
    builder.addCase(getUserBalance.fulfilled, (state, { payload }) => ({
      ...state,
      userBalance: payload,
    }));
    builder.addCase(getUserTransaction.fulfilled, (state, { payload }) => ({
      ...state,
      userTransaction: payload,
    }));
    builder.addCase(getTargetTransaction.fulfilled, (state, { payload }) => ({
      ...state,
      targetTransaction: payload,
    }));
  },
});

export const { login, isFirstLogin, initializeLoginStatus, setResetStatus, setEventModal } =
  actions;

export default reducer;
