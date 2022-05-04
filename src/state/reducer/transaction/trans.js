import { createSlice } from "@reduxjs/toolkit"
import intercept from "../../../data/intercept"

// 초기 state값
const initialState = {
    tikername_en : '',
    tikersrc : '',
    tikerDetail : [],
}

export const getServer = (url,requestData) => function (dispatch, getState){
        console.log(url);
        intercept.get(url,requestData
        ).then((response) => {
            const reusltData  = response.data.content;
            console.log(reusltData);
            // eslint-disable-next-line no-use-before-define
            dispatch(tikerData(reusltData)); 
        })
    }

export const PostServer = (url,requestData) => function (dispatch) {
    intercept.post(url,requestData
    ).then((response) => {
        console.log(response);
    })
}

const { actions, reducer } = createSlice({
    name : 'tiker',
    initialState,
    reducers : {
        tikerData : (state, {payload}) => {
                // eslint-disable-next-line no-param-reassign
                state.tikerDetail = payload
        }
    }
})

export const {tikerData} = actions;

export default reducer;