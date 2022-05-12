import { createSlice } from "@reduxjs/toolkit";
import { signUp } from "./thunk";

const initialState = {
    name: '',
    isFirstLogin: false,
    status: 'success'
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
    extroReducers: (builder) => {
        builder.addCase(signUp.fulfilled, (state, { payload }) => ({
            ...state,
            status: payload,
        }))
    }
})

export const { login, isFirstLogin } = actions;

export default reducer;