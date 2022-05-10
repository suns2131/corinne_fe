import { createSlice } from "@reduxjs/toolkit";
import { signUp } from "./thunk";

const initialState = {
    name: '',
    status: 'success'
}

const { actions, reducer } = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state) => ({
            name: 'test'
        })
    },
    extroReducers: (builder) => {
        builder.addCase(signUp.fulfilled, (state, { payload }) => ({
            ...state,
            status: payload.error,
        }))
    }
})

export const { login } = actions;

export default reducer;