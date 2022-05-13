/* eslint-disable no-param-reassign */
import { createSlice, current } from "@reduxjs/toolkit"
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
                const prevArray = current(state.getChart);
                if(prevArray.length > 0)
                {
                    if(payload.x !== prevArray[prevArray.length-1].x)
                    {
                        const array = [...state.getChart];
                        array.shift();
                        const array1 = [...array,payload];
                        // eslint-disable-next-line no-param-reassign
                        state.getChart = array1
                    }
                    else
                    {
                        const array = [...state.getChart];
                        const lastdata = prevArray[prevArray.length-1];
                        const newPayload = {
                            x:lastdata.x,
                            y:[
                                lastdata.y[0],
                                payload.y[1] > lastdata.y[1] ? payload.y[1] : lastdata.y[1],
                                payload.y[2] < lastdata.y[2] ? payload.y[2] : lastdata.y[2],
                                payload.y[3]
                            ]
                        }
                        const index = array.findIndex(el => el.x === payload.x);
                        array.splice(index,1,newPayload)
                        // eslint-disable-next-line no-param-reassign
                        state.getChart = array
                    }
                }
                else{
                    const array = [...state.getChart];
                    array.shift();
                    console.log(array);
                    const array1 = [...array,payload];
                    // eslint-disable-next-line no-param-reassign
                    state.getChart = array1
                }
                
        },
        getChart: (state, {payload}) => {
            console.log(payload);
            state.getChart = payload;
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

export const {addChart,updateChart,getCurMonut,getChart} = actions;

// 차트 정보 조회 
export const getLoadChart = (tiker,chartType) => function (dispatch) {
    console.log(tiker, chartType)
    intercept.get( chartType? `/api/price/date/${tiker}/1` : `/api/price/minute/${tiker}/1`
    ).then((response) => {
        console.log('차트정보')
        console.log(response.data);
        const arrays = response.data.content.filter((el,idx) => idx > 69);
        console.log(arrays)
        const newChart = arrays.map((el) => {
            const chartdt = {
                x: el.tradeTime,
                y: [el.startPrice,el.highPrice,el.lowPrice,el.endPrice],
            }
            return  chartdt;
            }
        )
        console.log(newChart);
        dispatch(getChart(newChart));
    })
}

export default reducer;