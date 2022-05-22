/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance, { axiosImgInstance } from '../../../data/axios';

export const signUp = createAsyncThunk('user/signUp', async (data, { getState }) => {
  const { user } = getState();
  const response = await axiosInstance.patch('/user/signup', { nickname: data });

  if (response.data.message === '중복된 닉네임이 존재합니다.') {
    alert(response.data.message);
    return { status: 'fail', nickname: user.userInfo.nickname };
  }
  return { status: 'success', nickname: user.name };
});

export const changeImage = createAsyncThunk('user/image', async (data) => {
  const response = await axiosImgInstance.patch('/api/user/image', data);

  return response.data;
});

export const postResetBalance = createAsyncThunk('user/reset', async () => {
  const response = await axiosInstance.put('/api/account/reset');
  if (response.status === 200) {
    return true;
  }
  return response.data;
});

export const getUserInfo = createAsyncThunk('user/getUserInfo', async () => {
  const response = await axiosInstance.get('/api/user/info');

  return response.data;
});

export const getUserBalance = createAsyncThunk('user/getUserBalance', async () => {
  const response = await axiosInstance.get('/api/account/balance');

  return response.data;
});

export const getUserTransaction = createAsyncThunk(
  'user/getUserTransaction',
  async ({ page }, thunkApi) => {
    const { userTransaction } = thunkApi.getState().user;
    console.log(`getUserTransaction조회 : ${page}`);
    console.log(`getUserTransaction조회 : ${userTransaction}`);
    const { data } = await axiosInstance.get(`/api/transaction/${page}`);

    if (userTransaction === null) {
      return data;
    }
    const newContent = [...data.content, ...userTransaction.content];
    const newData = {
      ...data,
      content: newContent,
    };

    return newData;
  },
);
