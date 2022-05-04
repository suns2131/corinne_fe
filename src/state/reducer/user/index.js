import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
}

const { actions, reducer } = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state) => ({
            name: 'test'
        })
    }
})

export const { login } = actions;

export default reducer;