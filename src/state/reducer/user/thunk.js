/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from "@reduxjs/toolkit";
import intercept from "../../../data/axios";

export const kakaoLogin = createAsyncThunk(
    "user/kakaoLogin",
    async (data, thunkApi) => {
        const response = await intercept.post('/user/kakao/callback', {autoCode: data})
        console.log('test', data, response);
    }
)

export const signUp = createAsyncThunk(
    "user/signUp",
    async (data, thunkApi) => {
        // const response = await intercept.get('/user/signup')
        console.log(data);
        return 'success'
    }
)