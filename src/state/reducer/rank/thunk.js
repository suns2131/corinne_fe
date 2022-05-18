/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../../data/axios';

export const getRealRank = createAsyncThunk('/api/rank/', async (Page) => {
  const response = await axiosInstance.get(`/api/rank/${Page}`);
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
