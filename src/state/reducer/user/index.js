import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo, signUp, getUserBalance, getUserTransaction } from "./thunk";

const initialState = {
    name: '',
    isFirstLogin: false,
    status: 'success',
    userInfo: null,
    userBalance: null,
    userTransaction: null,
}

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
        })
    },
    extraReducers: (builder) => {
        builder.addCase(signUp.fulfilled, (state, { payload }) => ({
            ...state,
            status: payload,
        }))
        builder.addCase(getUserInfo.fulfilled, (state, { payload }) => ({
            ...state,
            userInfo: payload,
        }))
        builder.addCase(getUserBalance.fulfilled, (state, { payload }) => ({
            ...state,
            userBalance: payload,
        }))
        builder.addCase(getUserTransaction.fulfilled, (state, { payload }) => ({
            ...state,
            userTransaction: payload,
        }))
    }
})

export const { login, isFirstLogin } = actions;

export default reducer;