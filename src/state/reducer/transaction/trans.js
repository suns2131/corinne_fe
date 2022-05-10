import { createSlice } from "@reduxjs/toolkit"
import intercept from "../../../data/intercept"

// 초기 state값
const initialState = {
    tikername_en : '',
    tikerList : [],
    tikerDetail : [],
}

export const getServer = (url,requestData) => function (dispatch, getState){
        intercept.get(url,requestData
        ).then((response) => {
            const reusltData  = response.data.content;
            // eslint-disable-next-line no-use-before-define
            dispatch(tikerData(reusltData)); 
        })
    }

export const getTikerList = () => function (dispatch){

      intercept.get('/api/price/rank'
        ).then((response) => {
            const reusltData  = response.data.content;
            const src = `${reusltData.unitPrice}_ICON`;
            const tikerList = {
                favorite : true,
                src : process.env.BTC_ICON,
                alt : 'btc',
                name : 'BTC',
                tiker: reusltData.tiker,
                upRate : reusltData.fluctuationRate,
                price: reusltData.tradePrice,
                unitPrice : 'BTC',    
            }

            // eslint-disable-next-line no-use-before-define
            dispatch(tikerData(tikerList)); 
        })
}


export const PostServer = (url,requestData) => function (dispatch) {
    console.log(requestData)
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
        },
        tikerList : (state, {payload}) => {
            const arrays = [...state.tikerList,payload]
            // eslint-disable-next-line no-param-reassign
            state.tikerList = arrays
    }
    }
})

export const {tikerData} = actions;

export default reducer;