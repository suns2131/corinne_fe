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