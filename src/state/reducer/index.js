import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import user from './user';
import trans from './transaction/trans';
import chat from './transaction/chat';

const reducer = (state, action) => {
    if(action.type === HYDRATE){
        return {
            ...state,
            ...action.payload
        };
    }
    return combineReducers({
        user,
        chat,
        trans,
    })(state, action)
}

export default reducer;