import { createSlice } from "@reduxjs/toolkit"
import intercept from "../../../data/intercept"

// 초기 state값
const initialState = {
    getChart : [],
}

export const getServer = (url,requestData) => function (dispatch, getState){
    console.log(url);
     intercept.get(url,requestData
    ).then((response) => {
        const reusltData  = response.data.content;
        console.log(reusltData);
        // const newChartData = {
        //     x : response.data.content.tradeTime,
        //     y : []
        // }

        // eslint-disable-next-line no-use-before-define
        // dispatch(tikerData(reusltData)); 
    })
}


const { actions, reducer } = createSlice({
    name : 'chatting',
    initialState,
    reducers : {
        addChart : (state, {payload}) => {
                // eslint-disable-next-line no-param-reassign
                state.getChart = payload
        }
    }
})

export const {addChat} = actions;

export default reducer;