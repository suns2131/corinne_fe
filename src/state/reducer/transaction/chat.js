import { createSlice } from '@reduxjs/toolkit';

// 초기 state값
const initialState = {
  ChatMessage: [],
};

const { actions, reducer } = createSlice({
  name: 'chatting',
  initialState,
  reducers: {
    addChat: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      const array = [...state.ChatMessage].concat(payload);

      // eslint-disable-next-line no-param-reassign
      state.ChatMessage = array;
    },
  },
});

export const { addChat } = actions;

export default reducer;
