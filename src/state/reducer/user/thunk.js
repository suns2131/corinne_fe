/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../data/axios";

export const signUp = createAsyncThunk(
    "user/signUp",
    async (data, thunkApi) => {
        const response = await axiosInstance.patch('/user/signup', {nickname: data})
        if(response.status === 200){
            return 'success'
        }
        return 'fail'
    }
)

export const getUserInfo = createAsyncThunk(
    "user/getUserInfo",
    async () => {
        
        const response = await axiosInstance.get('/api/user/info')
        
        return response.data;
    }
)

export const getUserBalance = createAsyncThunk(
    "user/getUserBalance",
    async () => {
        
        const response = await axiosInstance.get('/api/account/balance')

        return response.data;
    }
)

export const getUserTransaction = createAsyncThunk(
    "user/getUserTransaction",
    async ({page}) => {
        
        const response = await axiosInstance.get(`/api/transaction/${page}`)

        return response.data;
    }
)