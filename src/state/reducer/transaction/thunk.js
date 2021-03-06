/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../../data/axios';

export const getLoadChart = createAsyncThunk('/api/rank/', async (tiker, chartType) => {
  const response = await axiosInstance.get(`/api/price/minute/${tiker}`);
  return response.data;
});

export const postBookmark = createAsyncThunk('/api/account/bookmark', async (tiker) => {
  const response = await axiosInstance.get(`/api/account/bookmark/${tiker}`);
  return response.data;
});

export const deleteBookmark = createAsyncThunk('/api/account/bookmark', async (tikername) => {
  const response = await axiosInstance.delete(`/api/account/bookmark`, {
    data: { tiker: tikername },
  });
  return response.data;
});

export const getbuyCount = createAsyncThunk('/api/transaction/buycount', async (tiker) => {
  const response = await axiosInstance.get(`/api/transaction/buycount/${tiker}`);
  return response.data;
});

export const checkSocket = createAsyncThunk('updateSocketstat', async (value) => {
  return value;
});

// export const getTradePrice = createAsyncThunk('/api/price/tradeprice', async (tiker) => {
//   const response = await axiosInstance.get(`/api/price/tradeprice/${tiker}`);
//   return response.data;
// });
