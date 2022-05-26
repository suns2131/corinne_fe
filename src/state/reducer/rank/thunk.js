/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../../data/axios';

// export const getRealRank = createAsyncThunk('/api/rank/', async (Page) => {
//   const response = await axiosInstance.get(`/api/rank/${Page}`);
//   return response.data;
// });

export const getRealRank = createAsyncThunk('rank/getRealRank', async () => {
  const response = await axiosInstance.get(`/api/rank`);
  console.log(response.data);
  return response.data;
});

export const getFollowlist = createAsyncThunk('/api/follow', async () => {
  const response = await axiosInstance.get('/api/follow');
  return response.data;
});

export const getPrevRank = createAsyncThunk('/api/rank/lastweek', async ({ page }) => {
  const response = await axiosInstance.get(`/api/rank/lastweek/${page}`);
  return response.data;
});

export const getUserAlarm = createAsyncThunk('/api/user/alarm', async () => {
  const response = await axiosInstance.get(`/api/user/alarm`);
  return response.data;
});

export const getUserQuest = createAsyncThunk('/api/user/quest', async () => {
  const response = await axiosInstance.get(`/api/user/quest`);
  return response.data;
});

export const getMatch = createAsyncThunk('/api/user/rival', async () => {
  const response = await axiosInstance.get(`/api/user/rival`);
  return response.data;
});

export const postfollow = createAsyncThunk('/api/follow', async (followId) => {
  const response = await axiosInstance.post(`/api/user/rival`, {
    data: {
      followId,
    },
  });
  return response.data;
});

export const delfollow = createAsyncThunk('/api/follow', async (followId) => {
  const response = await axiosInstance.delete(`/api/user/rival`, {
    data: {
      followId,
    },
  });
  return response.data;
});

export const getTargetInfo = createAsyncThunk('/api/user/info', async (userId) => {
  const response = await axiosInstance.get(`/api/user/info/${userId}`);

  return response.data;
});

export const patchQuest = createAsyncThunk('/api/quest', async (questId, { dispatch }) => {
  console.log(`thunkQuestid: ${questId}`);
  console.log(typeof questId);
  const datas = {
    questNo: questId,
  };
  console.log(datas);
  const response = await axiosInstance.patch(`/api/quest`, datas);
  if (response.status === 200) {
    dispatch(getUserQuest());
  }
  return response.data;
});
