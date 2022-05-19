/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../../data/axios';

export const getLoadChart = createAsyncThunk('/api/rank/', async (tiker, chartType) => {
  const response = await axiosInstance.get(`/api/price/minute/${tiker}`);
  return response.data;
});

export const postBookmark = createAsyncThunk('/api/account/bookmark/', async (tiker) => {
  const response = await axiosInstance.get(`/api/account/bookmark/${tiker}`);
  return response.data;
});

export const deleteBookmark = createAsyncThunk('/api/account/bookmark/', async (tiker) => {
  const response = await axiosInstance.delete(`/api/account/bookmark/${tiker}`);
  return response.data;
});
