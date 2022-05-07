import { createSlice } from "@reduxjs/toolkit"
import intercept from "../../../data/intercept"

// 초기 state값
const initialState = {
    getCurrentMonut: 0,
    selectChartInfo : {},
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
                const array = [...state.getChart].concat(payload);
                // eslint-disable-next-line no-param-reassign
                state.getChart = array
        },
        getCurMonut: (state, {payload}) => {
            // eslint-disable-next-line no-param-reassign
            state.getCurrentMonut = payload;
        },
        selectChart: (state, {payload}) => {
            // eslint-disable-next-line no-param-reassign
            state.selectChartInfo = payload;
        },
    }
})

export const {addChart,getCurMonut} = actions;

export default reducer;